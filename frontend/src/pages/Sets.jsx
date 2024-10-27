import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import { BACKEND_URL } from '../../../constants';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const Sets = () => {
    const [sets, setSets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSets = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/getSets`);
                setSets(response.data);
            } catch (error) {
                console.error("Error fetching sets:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSets();
    }, []);

    return (
        <>
            {isLoading && <LoadingSpinner />}
            <div className="p-6 min-h-screen bg-gradient-to-br from-blue-600 to-purple-800 text-white">
                <h1 className="text-4xl font-extrabold mb-8 text-center text-yellow-300 drop-shadow-lg">
                    Collections de Cartes Pokémon
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {sets.map(set => (
                        <Link
                            key={set.id}
                            to={`/SetCards/${set.id}`}
                            state={{ name: set.name }}
                            className="bg-purple-700 rounded-lg shadow-lg p-5 cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="text-center">
                                <img src={set.images.logo} alt={set.name} className="w-24 h-24 mx-auto mb-4 rounded-md shadow-md" />
                                <h2 className="text-xl font-semibold text-yellow-300 mb-1">{set.name}</h2>
                                <p className="text-gray-200">Date de Sortie: {set.releaseDate}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Sets;
