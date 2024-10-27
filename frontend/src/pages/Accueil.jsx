
const Accueil = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-purple-800 text-white">
            <h1 className="text-6xl font-extrabold mb-6 tracking-widest text-center text-teal-300 drop-shadow-lg">
                Bienvenue sur <span className="text-pink-400">PokéGame</span>
            </h1>
            <p className="text-lg font-light mb-12 text-center max-w-md text-gray-200">
                Plongez dans l'univers des cartes Pokémon à collectionner et commencez votre aventure dès maintenant !
            </p>
            <img
                src="https://static.wixstatic.com/media/385f94_de0abbed840e4cbcb791c87ef74cff96~mv2.png/v1/fill/w_560,h_252,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Pokemon%20Cards%20Logo.png"
                alt="Pikachu"
                className="w-52 h-52 animate-spin-slow transition-transform duration-500 hover:scale-110"
            />
        </div>
    );
};

export default Accueil;
