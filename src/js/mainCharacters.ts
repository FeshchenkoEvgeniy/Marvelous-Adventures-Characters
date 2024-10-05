import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/dark.css";
import { debounce } from "throttle-debounce";
import {IfilterObj, IinitialState, ICharacters} from './interface'
import { fetchFilteredCharacters } from "./api";
import { getCategory } from "./mainCharactersGetCategory";
import { createMarkupForMainCharactersList } from "./createMarkup"

const datePicker = document.querySelector('#date-picker') as HTMLInputElement
const jsFilterForm = document.querySelector('.js-filter-form') as HTMLFormElement
const charactersList = document.querySelector('.js-characters-list') as HTMLElement;
const loadMoreBtn = document.querySelector('.js-main-character__btn') as HTMLElement;
const loader = document.querySelector('.js-loader') as HTMLElement;
const body = document.querySelector('body') as HTMLElement
 const notFoundBox = document.querySelector('.notFound__box') as HTMLElement;

const { limit, offset, requiredCharacters, currentCategory } = getCategory();

const initialState: IinitialState = {
    limit,
    offset,
    requiredCharacters,
    currentCategory,
    total: 0,
}

const filterValue: IfilterObj = {
    comics: null,
    name: null,
    orderBy: null,
    date: null,     
}

function handleResize() {
    const newCategory = getCategory();

    if (newCategory.currentCategory !== initialState.currentCategory) {
        initialState.currentCategory = newCategory.currentCategory;
        initialState.limit = newCategory.limit;
        initialState.offset = 0; 
        initialState.requiredCharacters = newCategory.requiredCharacters;
        filterValidateCharacters();
        charactersList.innerHTML = '';
    }
}

function showLoader(isLoading: boolean, showLoadMoreBtn: boolean) {
    if (isLoading) {
        loader.style.display = 'block';
        body.style.pointerEvents = 'none'
    } else {
        loader.style.display = 'none';
        body.style.pointerEvents = 'all' 
    }

    loadMoreBtn.style.display = showLoadMoreBtn ? 'block' : 'none';
}

function checkNotFound(isBolean: boolean) {
    if (isBolean) {
        notFoundBox.style.display = ''
        charactersList.style.display = 'none';
    } else {
        notFoundBox.style.display = 'none';
        charactersList.style.display = '';
    }
}

filterValidateCharacters()

function filterCharacters(evt: Event) {
    const target = evt.target as HTMLInputElement | HTMLSelectElement;

    switch (target.name) {
        case 'comics':
        filterValue.comics = target.value.replace(/[^0-9]/g, '')
        break;
        case 'name':
        filterValue.name = target.value
        break;
        case 'orderBy':
        filterValue.orderBy = target.value.toLowerCase()
        break;
    }
    initialState.offset = 0
    charactersList.innerHTML = ''

    filterValidateCharacters()
}

async function filterValidateCharacters() {
    let validCharacters: ICharacters[] = [];

    showLoader(true, false)

    while (validCharacters.length < initialState.requiredCharacters) {
        try {
            const { data } = await fetchFilteredCharacters(filterValue, initialState.offset, initialState.limit);
            initialState.total = data.total

            checkNotFound(!data.results.length)

            const filteredCharacters = data.results.filter(({ thumbnail: { path } }: ICharacters) => {
                return !path.endsWith('image_not_available') && !path.endsWith('4c002e0305708');
            });

            validCharacters = [...validCharacters, ...filteredCharacters];

            initialState.offset += initialState.limit;

        } catch (err) {
            console.log("Помилка під час запиту:", err);
            break;
        }
        
        if (initialState.total <= initialState.offset) {
            showLoader(false, false)
            break
        }

        if (validCharacters.length >= initialState.requiredCharacters) {
            validCharacters = validCharacters.slice(0, initialState.requiredCharacters);
            showLoader(false, true);
            break;
        }
    }

    charactersList.insertAdjacentHTML('beforeend', createMarkupForMainCharactersList(validCharacters));
}

function loadMoreCharacters() {
    filterValidateCharacters();
}

flatpickr(datePicker, {
    defaultDate: new Date(),
    allowInput: true,
    onClose: (selectedDates, dateStr, instance) => {
        if (!isValidDate(dateStr)) {
            Notiflix.Notify.failure('Invalid date format. Expected YYYY-MM-DD');
            instance.clear()
            filterValue.date = null
            return
        } else {
            filterValue.date = dateStr
        }
    }
});


function isValidDate(dateStr: string): boolean {
    return /^\d{4}-\d{2}-\d{2}$/.test(dateStr)
}

loadMoreBtn.addEventListener('click', loadMoreCharacters);
jsFilterForm.addEventListener('input', debounce(800, filterCharacters))
window.addEventListener('resize', debounce(1000, handleResize));