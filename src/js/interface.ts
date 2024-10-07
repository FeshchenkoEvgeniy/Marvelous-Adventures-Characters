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

interface IRandomComics {
    thumbnail: IThumbnail,
    title: string,
}

interface IDetailCharacters {
    name: string,
    description: string,
    modified: string,
    thumbnail: IThumbnail,
    randomComics: IRandomComics[]
}

interface IComics {
  resourceURI: string;
  name: string;
}

interface IResult {
  comics: {
    items: IComics[];
  };
}

export { ICharacters, IinitialState, IfilterObj, IDetailCharacters, IResult}