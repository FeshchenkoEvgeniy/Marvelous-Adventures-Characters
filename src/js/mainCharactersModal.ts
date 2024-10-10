import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css'
import { fetchCharactersById } from "./api";
import { createMarkupForModalCharacters } from './createMarkup';
import { isLoad } from './mainCharactersComicsModal';

const charactersList = document.querySelector('.js-characters-list') as HTMLElement;
const body = document.querySelector('body') as HTMLElement

let handler: (evt: KeyboardEvent) => void;
const options = {
    onShow(instance: any) {
        handler = closeModal.bind(instance);
   
        document.addEventListener('keydown', handler);
        body.style.overflowY = 'hidden' 
            
        return true
    },
    onClose() {
        body.style.overflowY = ''
        document.removeEventListener('keydown', handler);

        return true
    }
}

function onClick(evt: Event) {
    const target = evt.target as HTMLElement

    if (target.classList.contains('js-characters-list')) {
        return
    }

    const listItem = target.closest('.characters__item') as HTMLElement;
    const url = listItem?.dataset.url

    if (url) {
    body.style.pointerEvents = 'none'
 
    fetchCharactersById(url)
    .then((data) => {    
    const instance = basicLightbox.create(createMarkupForModalCharacters(data),options)
    instance.show()   
    })
    .catch(err => console.log(err))
    .finally(() => {
    body.style.pointerEvents = 'all'
    isLoad()
    })
    } else {
        console.error('URL not found');
    }
}

function closeModal(this: any, evt: KeyboardEvent) {
  if (evt.code === 'Escape') {
    this.close();
  }
}

charactersList.addEventListener('click', onClick)