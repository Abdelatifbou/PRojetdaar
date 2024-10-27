import Layout from '@/components/Layout';
import { buyCards } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

const Transfert = ({ selectedCards, setSelectedCards }) => {
    const [connectedAccount, setConnectedAccount] = useState('');
    const [walletAddress, setWalletAddress] = useState('');

    useEffect(() => {
        const fetchAccount = async () => {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setConnectedAccount(accounts[0]);
        };

        fetchAccount();
    }, []);

    return (
        <>
            <div className="h-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-purple-500">
                <div className='h-1/6 p-5'>Your are connected with {connectedAccount}</div>

                <div className='h-5/6 flex flex-col items-center justify-center'>
                    <h1 className="text-4xl text-white font-bold mb-4">Transfert Pokemon Card</h1>

                    {/* Pokemon Animation */}
                    <img
                        src="https://static.wixstatic.com/media/385f94_de0abbed840e4cbcb791c87ef74cff96~mv2.png/v1/fill/w_560,h_252,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Pokemon%20Cards%20Logo.png"
                        alt="Pokemon"
                        
                    />

                    {/* Wallet Address Input */}
                    <div className="mt-6">
                        <input
                            type="text"
                            placeholder="Enter Wallet Address"
                            value={walletAddress}
                            onChange={(e) => setWalletAddress(e.target.value)}
                            className="px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <button
                            onClick={() => buyCards(selectedCards, walletAddress, setSelectedCards)}
                            className="ml-4 px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition cursor-pointer"
                            disabled={!walletAddress || selectedCards.length === 0}
                        >
                            Transfert
                        </button>
                    </div>
                    {connectedAccount.toLowerCase() == walletAddress.toLowerCase() &&
                        <div className='my-6'>You will mint this card to yourself !</div>
                    }
                    {
                        (walletAddress && connectedAccount.toLowerCase() != walletAddress.toLowerCase()) &&
                        <div className='my-6'>Nice, You are generous, you will transfert to someone else !</div>
                    }
                </div>
            </div>
        </>
    );
};

export default Transfert;
