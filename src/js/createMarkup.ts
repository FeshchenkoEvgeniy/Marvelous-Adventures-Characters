import {ICharacters, IDetailCharacters, IDetailComics} from './interface'

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

function formatDate(modified: string) {
    const date = new Date(modified)
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function createMarkupForModalCharacters(data: IDetailCharacters): string {
    const { name, description, modified, thumbnail: { path, extension }, randomComics } = data

    const formattedDate = formatDate(modified)

    const markup = randomComics.map(({thumbnail: {path, extension}, title, comicsId}) => {
        return `<li class='characters-modal__item' data-comicsId='${comicsId}'>
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
        ${!randomComics.length ? `<div class="notFound__box" style="margin-top: 16px;">
        <p class="notFound__text" style="text-align: center;">Not found..</p>
      </div>` : `<ul class='characters-modal__list js-characters-modal__list'>
            ${markup}
        </ul>`} 
    </div>
    </div>
    </div>    
    `
}

function createMarkupForModalComics(data: IDetailComics): string {
    const { title, description, modified, thumbnail: { path, extension }, characters, prices, format, pageCount } = data
    
    const formattedDate = formatDate(modified)
    
    const markup = characters.map(({thumbnail: {path, extension}, name}) => {
        return `<li class='comics-modal__item'>
                <img src="${path}.${extension}" alt="${name}" class='comics-modal__characters-img'>
                <p class='comics-modal__characters-name'>${name}</p>
            </li>`    
        }).join('')
    return `
    <div class='comics-modal__container'>
        <img src="${path}.${extension}" alt="${title}" class='comics-modal__img'>
    <div class='comics-modal--bg'>
    <div class='comics-modal__box'>
        <div class='comics-modal__wrapper'> 
        <p class='comics-modal__name'>${title}</p>
        <p class='comics-modal__modified'>${formattedDate}</p>
        </div>
        <p class='comics-modal__description'>${description === null || !description.trim().length || description.includes('&nbsp;') ? str : description}</p>
        <ul class='comics-modal__detail-list'>
            <li class='comics-modal_detail-item'> 
                <span class='comics-modal_detail-preTitle'>Format</span>
                <p class='comics-modal_detail-text'>${format}</p>
            </li>
            <li class='comics-modal_detail-item'> 
                <span class='comics-modal_detail-preTitle'>Pages</span>
                <p class='comics-modal_detail-text'>${pageCount ? pageCount : 32}</p>
            </li>
            <li class='comics-modal_detail-item'> 
                <span class='comics-modal_detail-preTitle'>Price</span>
                <p class='comics-modal_detail-text'>$${!prices[0].price ? 2.99 : prices[0].price}</p>
            </li>
        </ul>
    </div>
    <div>
        <p class='comics-modal__title'>Characters</p>
        <ul class='comics-modal__list'>
            ${markup}
        </ul>
    </div>
    </div>
    </div>    
    `
}

export {createMarkupForRandomCharacters, createMarkupForSwiperWrapper, createMarkupForMainCharactersList, createMarkupForModalCharacters, createMarkupForModalComics}