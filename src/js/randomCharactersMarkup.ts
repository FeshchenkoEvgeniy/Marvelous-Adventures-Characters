import { fetchFiveRandomCharacters } from "./api";
import { createMarkupForRandomCharacters, createMarkupForSwiperWrapper } from "./createMarkup";
import { showLoader, hideLoader } from "./loader";

const swiperWrapper = document.querySelector('.js-random-characters__swiper-box') as HTMLElement
const randomCharactersList = document.querySelector('.js-random-characters__list') as HTMLElement

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
