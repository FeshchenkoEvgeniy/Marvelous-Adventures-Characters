import md5 from "md5";
import { randomCharactersId } from "./randomCharactersId";

const ts = '1'
const publickKey = '3e4a92df9169701b297c3638807c7b2e'
const privateKey = 'c93b62455441ec9a036d868875eb8644bb02aa07'
const hash = md5(ts + privateKey + publickKey)
const BASE_URL = 'http://gateway.marvel.com/v1/public/'

const fetchFiveRandomCharacters = async () => {
    const characterIds = randomCharactersId();

    const arrayOfPromises = characterIds.map(async characterId => {
        const response = await fetch(`${BASE_URL}/characters/${characterId}?ts=${ts}&apikey=${publickKey}&hash=${hash}`);
        return response.json();
    });

    const characters = await Promise.all(arrayOfPromises);
    const randomCharacters = characters.flatMap(({ data: { results } }) => results);
    return randomCharacters
};

export {fetchFiveRandomCharacters}