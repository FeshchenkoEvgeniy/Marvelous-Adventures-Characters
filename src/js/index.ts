// import md5 from "md5";

// const btn = document.querySelector('.test-btn') as HTMLElement;

// const ts = '1'
// const publickKey = '3e4a92df9169701b297c3638807c7b2e'
// const privateKey = 'c93b62455441ec9a036d868875eb8644bb02aa07'
// const hash = md5(ts + privateKey + publickKey)
// const BASE_URL = 'http://gateway.marvel.com/v1/public/'

// // const charactersId = JSON.parse(localStorage.getItem('charactersId') ?? '[]') 

// let offset = -100
// let arr: Array<number> = []

// interface IData{
//     id: number,
//     description: string,
//     thumbnail: {
//         path: string
//     }
// }

// function onClick(evt: Event) {
//     offset += 100
//     const str = 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
//     fetchUsers()
//         .then(({ data }) => {
//         console.log(data)
//             data.results.flatMap(({ id, description, thumbnail: { path } }: IData) => {
//                 // console.log(path)
//             // console.log(path.endsWith('image_not_available'))
//             if (description.length && !path.endsWith('image_not_available')) {
//             arr.push(id)
//         }
//     })
//   })
//     .catch(error => console.log(error));
//     console.log(arr)
//     if (arr.length === 307) {
//         localStorage.setItem('charactersId', JSON.stringify(arr))
//     }
// }

// const fetchUsers = async () => {
//   const response = await fetch(`${BASE_URL}characters?offset=${offset}&limit=100&ts=${ts}&apikey=${publickKey}&hash=${hash}`);
//   const data = await response.json();
//   return data;
// };

// btn.addEventListener('click', onClick)

