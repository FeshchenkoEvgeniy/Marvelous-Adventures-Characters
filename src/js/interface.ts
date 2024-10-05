interface IThumbnail{
    extension: string,
    path: string
}

interface ICharacters {
    name: string,
    description: string
    resourceURI: string,
    thumbnail: IThumbnail,
}

interface IinitialState{
    limit: number,
    offset: number,
    requiredCharacters: number,
    currentCategory: string,
    total: number,
}

interface IfilterObj {
    comics: null | string,
    name: null | string,
    orderBy: null | string,
    date: null | string,
}

export { ICharacters, IinitialState, IfilterObj}