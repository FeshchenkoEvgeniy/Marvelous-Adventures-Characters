import { fetchFiveRandomCharacters } from "./api";
import { showLoader, hideLoader } from "./loader";

const swiperWrapper = document.querySelector('.js-random-characters__swiper-box') as HTMLElement
const randomCharactersList = document.querySelector('.js-random-characters__list') as HTMLElement

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

showLoader()
fetchFiveRandomCharacters()
    .then((randomCharacters) => {
        swiperWrapper.innerHTML = createMarkupForSwiperWrapper(randomCharacters)
        randomCharactersList.innerHTML = createMarkupForRandomCharacters(randomCharacters)
    })
    .catch(err => {
        console.log(err)
    })
    .finally(() => {
        hideLoader()
    })

function createMarkupForSwiperWrapper(arr: ICharacters[]) {
    return arr.map(({name, thumbnail:{extension,path}}: ICharacters) => {
        return `
        <div class="swiper-slide"><img src="${path}.${extension}" alt="${name}" class='random-characters__img'></div>
        `
    }).join('')
}

const str: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero praesentium doloremque quos voluptatem voluptates ipsa recusandae fugit officia. Sequi, cupiditate ut. Error placeat reprehenderit laudantium quibusdam voluptates,laboriosam ipsum!'

function createMarkupForRandomCharacters(arr: ICharacters[]) {
    return arr.map(({ name, description, resourceURI }: ICharacters) => {
        return `<li class="random-characters__item" data-url='${resourceURI}'>
        <p class='random-characters__name'>${name}</p>        
        <p class="random-characters__description">${!description.trim().length || description.includes('&nbsp;') ? str : description}</p>
        </li>`
    }).join('')
}
