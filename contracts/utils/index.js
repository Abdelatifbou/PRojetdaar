// Utility to convert milliseconds into minutes:seconds format
const convertMillisToTime = (milliseconds) => {
    const mins = Math.floor(milliseconds / 60000);
    const secs = Math.floor((milliseconds % 60000) / 1000);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};


const POKEMONURL = 'https://api.pokemontcg.io/v2';


module.exports = {
    convertMillisToTime,
    POKEMONURL
};