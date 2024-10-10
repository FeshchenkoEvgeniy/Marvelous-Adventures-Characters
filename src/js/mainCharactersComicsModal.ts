import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css'
import { fetchComicsById } from "./api";
import {createMarkupForModalComics} from './createMarkup'
 
export function isLoad() {
const charactersModaList = document.querySelector('.js-characters-modal__list') as HTMLElement;
const body = document.querySelector('body') as HTMLElement;

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
    const listItem = target.closest('.characters-modal__item') as HTMLElement;
    const comicsId = listItem?.dataset.comicsid
    
    if (comicsId) {
        fetchComicsById(comicsId)
        .then((data) => {
        const instance = basicLightbox.create(createMarkupForModalComics(data),options)
        instance.show()    
        })
        .catch(err => console.log(err))
    }
}

function closeModal(this: any, evt: KeyboardEvent) {
  if (evt.code === 'Escape') {
    this.close();
  }
}    
    
charactersModaList.addEventListener('click', onClick)
}