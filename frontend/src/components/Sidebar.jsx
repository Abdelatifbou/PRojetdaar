import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ basketCount }) => {
    return (
        <div className="w-full bg-gradient-to-r from-blue-700 to-purple-700 text-white py-4 px-6 flex items-center justify-between shadow-lg">
            {/* Logo */}
            <div className="flex items-center">
                <img
                    src="https://static.wixstatic.com/media/385f94_de0abbed840e4cbcb791c87ef74cff96~mv2.png/v1/fill/w_560,h_252,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Pokemon%20Cards%20Logo.png"
                    alt="Logo Pokemon"
                    className="w-14 h-14 rounded-full border-2 border-white shadow-md"
                />
                <h1 className="ml-3 text-3xl font-extrabold tracking-wide text-yellow-300 drop-shadow-lg">
                    PokéGame
                </h1>
            </div>

            {/* Navigation Links */}
            <nav className="flex space-x-8 text-lg">
                <Link to="/" className="py-2 hover:text-yellow-300 transition duration-300">
                    Accueil
                </Link>
                <Link to="/sets" className="py-2 hover:text-yellow-300 transition duration-300">
                    Collections
                </Link>
                <Link to="/transfert" className="py-2 hover:text-yellow-300 transition duration-300">
                    Transfert
                </Link>
                <Link to="/myCards" className="py-2 hover:text-yellow-300 transition duration-300">
                    Mes Cartes
                </Link>
            </nav>

            {/* Store Basket */}
            <div className="relative">
                <button className="px-6 py-2 bg-yellow-300 text-purple-700 font-semibold rounded-full shadow-md hover:bg-yellow-400 transition duration-300">
                    Panier
                </button>
                {basketCount > 0 && (
                    <span
                        className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center font-bold animate-bounce shadow-lg"
                    >
                        {basketCount}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
