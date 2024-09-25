import { fetchFiveRandomCharacters } from "./api";

const swiperWrapper = document.querySelector('.random-characters__swiper-box') as HTMLElement
const randomCharactersList = document.querySelector('.random-characters__list') as HTMLElement

interface IThumbnail{
    extension: string,
    path: string
}

interface ICharacters {
    name: string,
    description: string,
    resourceURI: string,
    thumbnail: IThumbnail,
}

fetchFiveRandomCharacters()
    .then((randomCharacters) => {
        swiperWrapper.innerHTML = createMarkupForSwiperWrapper(randomCharacters)
        randomCharactersList.innerHTML = createMarkupForRandomCharacters(randomCharacters)
    })
    .catch(err => console.log(err))

function createMarkupForSwiperWrapper(arr: ICharacters[]) {
    return arr.map(({name, thumbnail:{extension,path}}: ICharacters) => {
        return `
        <div class="swiper-slide"><img src="${path}.${extension}" alt="${name}" class='random-characters__img'></div>
        `
    }).join('')
}

const str: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero praesentium doloremque quos voluptatem voluptates ipsa recusandae fugit officia. Sequi, cupiditate ut. Error placeat reprehenderit laudantium quibusdam voluptates,laboriosam ipsum!'

function createMarkupForRandomCharacters(arr: ICharacters[]) {
    return arr.map(({name, description, resourceURI}: ICharacters) => {
        return `<li class="random-characters__item" data-url='${resourceURI}'>
        <p class='random-characters__name'>${name}</p>        
        <p class="random-characters__description">${description.length ? description : str}</p>
        </li>`
    }).join('')
}
