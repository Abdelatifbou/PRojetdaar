import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Types = () => {
    const [types, setTypes] = useState([]);
    const [subtypes, setSubtypes] = useState([]);
    const [supertypes, setSupertypes] = useState([]);

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await axios.get('https://api.pokemontcg.io/v2/types');
                setTypes(response.data.data);
                const subtypesResponse = await axios.get('https://api.pokemontcg.io/v2/subtypes');
                setSubtypes(subtypesResponse.data.data);
                const supertypesResponse = await axios.get('https://api.pokemontcg.io/v2/supertypes');
                setSupertypes(supertypesResponse.data.data);
            } catch (error) {
                console.error("Error fetching types:", error);
            }
        };

        fetchTypes();
    }, []);

    return (
        <>
            <div className="p-4">
                <h1 className="text-3xl font-bold mb-6">Pokemon Types</h1>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Types</h2>
                    <ul className="list-disc pl-5">
                        {types.map((type, index) => (
                            <li key={index} className="text-lg">{type}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Subtypes</h2>
                    <ul className="list-disc pl-5">
                        {subtypes.map((subtype, index) => (
                            <li key={index} className="text-lg">{subtype}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-2">Supertypes</h2>
                    <ul className="list-disc pl-5">
                        {supertypes.map((supertype, index) => (
                            <li key={index} className="text-lg">{supertype}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Types;
