import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css'
import { fetchCharactersById } from "./api";
import { createMarkupForModalCharacters } from './createMarkup';

const charactersList = document.querySelector('.js-characters-list') as HTMLElement;
const body = document.querySelector('body') as HTMLElement

function onClick(evt: Event) {
    const target = evt.target as HTMLElement

    if (target.classList.contains('js-characters-list')) {
        return
    }

    const listItem = target.closest('.characters__item') as HTMLElement;
    const url = listItem?.dataset.url

    if (url) {
    fetchCharactersById(url)
    .then((data) => {
    let handler: (evt: KeyboardEvent) => void;  
    const instance = basicLightbox.create(createMarkupForModalCharacters(data),{
    onShow(instance) {
        handler = closeModal.bind(instance);
            
        document.addEventListener('keydown', handler);
        body.style.overflowY = 'hidden' 
            
        return true
    },
    onClose() {
        body.style.overflowY = ''
        document.removeEventListener('keydown', handler);

        return true
    },            
    })
        
    instance.show()   
    })
    .catch(err => console.log(err))
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