import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../../constants';
import { useLocation, useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const SetCards = ({ selectedCards, setSelectedCards }) => {
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id: setCardsID } = useParams();
    const location = useLocation();
    const setName = location.state?.name || 'Cartes du Set';

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/getSetCards/${setCardsID}`);
                setCards(response.data);
            } catch (error) {
                console.error("Error fetching cards:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCards();
    }, [setCardsID]);

    const handleCardClick = (card) => {
        const cardIndex = selectedCards.findIndex(selectedCard => selectedCard.id === card.id);
        if (cardIndex === -1) {
            setSelectedCards([...selectedCards, card]);
        } else {
            const updatedSelectedCards = [...selectedCards];
            updatedSelectedCards.splice(cardIndex, 1);
            setSelectedCards(updatedSelectedCards);
        }
    };

    const isCardSelected = (card) => {
        return selectedCards.some(selectedCard => selectedCard.id === card.id);
    };

    return (
        <>
            {isLoading && <LoadingSpinner />}
            <div className="p-6 min-h-screen bg-gradient-to-br from-blue-600 to-purple-800 text-white">
                <h1 className="text-4xl font-extrabold mb-8 text-center text-yellow-300 drop-shadow-lg">
                    {setName} - Cartes
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cards.map(card => (
                        <div
                            key={card.id}
                            className={`cursor-pointer rounded-lg p-4 transition-all duration-300 transform 
                                hover:scale-105 hover:shadow-2xl ${isCardSelected(card)
                                ? 'border-2 border-yellow-300 bg-purple-700 shadow-lg scale-105'
                                : 'bg-gray-700 opacity-80 scale-95 grayscale'}`}
                            onClick={() => handleCardClick(card)}
                        >
                            <img src={card.image} alt={card.name} className="w-full h-60 object-contain mb-3 rounded-lg shadow-md" />
                            <h2 className="text-xl font-semibold text-yellow-300 mb-1 text-center">{card.name}</h2>
                            <p className="text-gray-200 text-center">{card.set}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SetCards;
