import {ICharacters, IDetailCharacters} from './interface'

function createMarkupForSwiperWrapper(arr: ICharacters[]): string {
    return arr.map(({name, thumbnail:{extension,path}}: ICharacters) => {
        return `
        <div class="swiper-slide"><img src="${path}.${extension}" alt="${name}" class='random-characters__img'></div>
        `
    }).join('')
}

const str: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero praesentium doloremque quos voluptatem voluptates ipsa recusandae fugit officia. Sequi, cupiditate ut. Error placeat reprehenderit laudantium quibusdam voluptates,laboriosam ipsum!'

function createMarkupForRandomCharacters(arr: ICharacters[]): string {
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

function createMarkupForModalCharacters(data: IDetailCharacters): string {
    const { name, description, modified, thumbnail: { path, extension }, randomComics } = data

    const date = new Date(modified)
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    const markup = randomComics.map(({thumbnail: {path, extension}, title}) => {
        return `<li class='characters-modal__item'>
                <img src="${path}.${extension}" alt="${title}" class='characters-modal__comics-img'>
                <p class='characters-modal__comics-title'>${title}</p>
            </li>`    
        }).join('')
    return `
    <div class='characters-modal__container'>
        <img src="${path}.${extension}" alt="${name}" class='characters-modal__img'>
    <div class='characters-modal--bg'>
    <div class='characters-modal__box'>
        <div class='characters-modal__wrapper'> 
        <p class='characters-modal__name'>${name}</p>
        <p class='characters-modal__modified'>${formattedDate}</p>
        </div>
        <p class='characters-modal__description'>${!description.trim().length || description.includes('&nbsp;') ? str : description}</p>
    </div>
    <div>
        <p class='characters-modal__title'>List of comics</p>
        <ul class='characters-modal__list'>
            ${markup}
        </ul>
    </div>
    </div>
    </div>    
    `
}


export {createMarkupForRandomCharacters, createMarkupForSwiperWrapper, createMarkupForMainCharactersList, createMarkupForModalCharacters}