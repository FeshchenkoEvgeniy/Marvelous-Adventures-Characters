interface IThumbnail{
    extension: string,
    path: string
}

interface ICharacters {
    name: string,
    resourceURI: string,
    thumbnail: IThumbnail,
}

interface IinitialState{
    limit: number,
    offset: number,
    requiredCharacters: number,
    currentCategory: string,
}

export { ICharacters, IinitialState}