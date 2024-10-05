import md5 from "md5";
import { randomCharactersId } from "./randomCharactersId";
import { IfilterObj } from './interface'

const ts = '1'
const publickKey = '3e4a92df9169701b297c3638807c7b2e'
const privateKey = 'c93b62455441ec9a036d868875eb8644bb02aa07'
const hash = md5(ts + privateKey + publickKey)
const BASE_URL = 'https://gateway.marvel.com/v1/public'

async function fetchFiveRandomCharacters() {
    const characterIds = randomCharactersId();

    const arrayOfPromises = characterIds.map(async characterId => {
        const response = await fetch(`${BASE_URL}/characters/${characterId}?ts=${ts}&apikey=${publickKey}&hash=${hash}`);
        return response.json();
    });

    const characters = await Promise.all(arrayOfPromises);
    const randomCharacters = characters.flatMap(({ data: { results } }) => results);
    return randomCharacters
};

async function fetchFilteredCharacters(obj: IfilterObj, offset:number, limit:number) {
    const {comics, name, orderBy, date} = obj
    const params = new URLSearchParams;

    if (comics) params.append('comics', comics);
    if (name) params.append('nameStartsWith', name);
    if (orderBy) params.append('orderBy', orderBy);
    if (date) params.append('modifiedSince', date);

    const response = await fetch(`${BASE_URL}/characters?${params}&limit=${limit}&offset=${offset}&ts=${ts}&apikey=${publickKey}&hash=${hash}`);
    return response.json();
}

export {fetchFiveRandomCharacters, fetchFilteredCharacters}