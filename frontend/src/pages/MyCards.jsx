import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from 'axios';
import { BACKEND_URL } from '../../../constants';
import LoadingSpinner from '../components/LoadingSpinner'; // For the loading spinner

function MyCards() {
    const [userCards, setUserCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [connectedAccount, setConnectedAccount] = useState('');

    useEffect(() => {
        const getConnectedAccount = async () => {
            let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setConnectedAccount(accounts[0]);
        };
        getConnectedAccount();

        const fetchUserCards = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/getUserNFTs/${connectedAccount}`);
                console.log(response.data);

                const list = [];
                for (const card of response.data) {
                    const res = await axios.get(card.tokenURI);

                    list.push({ id: card.id, image: res.data.image });
                }
                setUserCards(list);
            } catch (error) {
                console.error('Error while fetching user cards:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserCards();
    }, [connectedAccount]);

    return (
        <div className="h-full p-6 bg-gradient-to-b from-blue-400 to-purple-500">
            <h1 className="text-4xl font-bold mb-8 text-center text-white">My Pokemon Cards</h1>

            {isLoading ? (
                <LoadingSpinner />  // Show loading spinner while fetching data
            ) : userCards.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {userCards.map(card => (
                        <div
                            key={card.id}
                            className={`cursor-pointer rounded-lg p-4 transition-all duration-300 transform hover:transform hover:translate-x-1 hover:-translate-y-1 hover:rotate-1 opacity-33 scale-85 shadow-none `}
                        >
                            <img src={card.image} alt={card.name} className="w-full mb-2 rounded" />
                            <h2 className="text-lg font-bold">{card.name}</h2>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center mt-10">
                    {/* Sad Pokemon animation */}
                    {/* <img
                        src="/images/sad-pokemon.gif"
                        alt="Sad Pokemon"
                        className="w-64 mb-6"
                    /> */}
                    <p className="text-center text-lg font-semibold text-gray-500 mb-4">
                        You don't have any cards yet.
                    </p>
                    {/* Invite to Sets page */}
                    <Link
                        to="/Sets"
                        className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
                    >
                        Go to Sets to Mint a Card
                    </Link>
                </div>
            )}
        </div>
    );
}

export default MyCards;
