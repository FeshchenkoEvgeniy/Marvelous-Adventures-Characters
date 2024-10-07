import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css'
import { fetchCharactersById } from "./api";
import { IDetailCharacters } from './interface'   

const charactersList = document.querySelector('.js-characters-list') as HTMLElement;

function onClick(evt: Event) {
    const target = evt.target as HTMLElement
    let instance;
    if (target.classList.contains('js-characters-list')) {
        return
    }

    const listItem = target.closest('.characters__item') as HTMLElement;
    const url = listItem?.dataset.url

    if (url) {
        fetchCharactersById(url)
        .then((data) => {
        const { name, description, modified, thumbnail: { path, extension }, randomComics } = data
        const markup = randomComics.map(({thumbnail: {path, extension}, title}) => {
            return `<li>
                <img src="${path}.${extension}" alt="${title}">
                <p>${title}</p>
            </li>`    
        }).join('')
        instance = basicLightbox.create(`
        <div>
            <img src="${path}.${extension}" alt="${name}">
        <div>
            <p>${name}</p>
            <p>${modified}</p>
            <p>${description}</p>
            <p>List of comics</p>
        <ul style="max-height: 60vh; overflow-y: auto;">
            ${markup}
        </ul>
        </div>
        </div>
        `)
        instance.show()    
        })
        .catch(err => console.log(err))
    } else {
        console.error('URL not found');
    }
}
charactersList.addEventListener('click', onClick)