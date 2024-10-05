import {ICharacters} from './interface'

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

function createMarkupForMainCharactersList(arr: ICharacters[]): string {
    return arr.map(({ name, resourceURI, thumbnail: { extension, path } }) => {
        return `
            <li class="characters__item" data-url='${resourceURI}'>
                <img src="${path}.${extension}" alt="${name}" class="characters__img" />
                <p class="characters__name">${name}</p>
            </li>
        `;
    }).join('');
}


export {createMarkupForRandomCharacters, createMarkupForSwiperWrapper, createMarkupForMainCharactersList}