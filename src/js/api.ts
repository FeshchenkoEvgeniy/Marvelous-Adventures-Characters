import md5 from "md5";
import { randomCharactersId, randomComicsId } from "./randomCharactersId";
import { IfilterObj, IDetailCharacters, IResult } from './interface'

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

async function fetchCharactersById(url: string) {
    const arrUrl = url.split('/');
    const characterId = arrUrl[arrUrl.length - 1];
    
    const response = await fetch(`${BASE_URL}/characters/${characterId}?ts=${ts}&apikey=${publickKey}&hash=${hash}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error("Error");
            }
            return resp.json()
        })
        .then(async ({ data: {results} }) => {
            const randomIdx = randomComicsId(results[0].comics.items.length)
            const randomComics = await fetchRandomComics(randomIdx, results)
            const charactersObj: IDetailCharacters = {
                name: results[0].name,
                description: results[0].description,
                modified: results[0].modified,
                thumbnail: results[0].thumbnail,
                randomComics: randomComics
            }
            return charactersObj
        })
        .catch(err => console.log(err))
    return response as IDetailCharacters
}

async function fetchRandomComics(randomIdx: number[], results: IResult[]) {
    const randomComicsUrl = randomIdx.map(idx => results[0].comics.items[idx])
    
    const arrayOfPromises = randomComicsUrl.map(async obj => {
        const response = await fetch(`${obj.resourceURI}?ts=${ts}&apikey=${publickKey}&hash=${hash}`);
        return response.json();
    });

    const comics = await Promise.all(arrayOfPromises);
    const randomComics = comics.flatMap(({ data: { results } }) => {
        return {thumbnail: results[0].thumbnail, title: results[0].title}
    });

    return randomComics
}

export {fetchFiveRandomCharacters, fetchFilteredCharacters, fetchCharactersById}