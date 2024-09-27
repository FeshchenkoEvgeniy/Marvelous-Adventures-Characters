import { fetchAllCharacters } from "./api";
import { debounce } from 'throttle-debounce';
import { ICharacters, IinitialState } from './interface'
import { getCategory } from "./mainCharactersGetCategory";

const charactersList = document.querySelector('.js-characters-list') as HTMLElement;
const loadMoreBtn = document.querySelector('.main-characters__btn') as HTMLElement;

const { limit, offset, requiredCharacters, currentCategory } = getCategory();

const initialState: IinitialState = {
    limit,
    offset,
    requiredCharacters,
    currentCategory,
}

    window.addEventListener('resize', debounce(1000, handleResize));
    loadMoreBtn.addEventListener('click', loadMoreCharacters);
    
    filterValidateCharacters();
    
function handleResize() {
    const newCategory = getCategory();

    if (newCategory.currentCategory !== initialState.currentCategory) {
        initialState.currentCategory = newCategory.currentCategory;
        initialState.limit = newCategory.limit;
        initialState.offset = 0; 
        initialState.requiredCharacters = newCategory.requiredCharacters;

        charactersList.innerHTML = '';

        filterValidateCharacters();
    }
}

async function filterValidateCharacters() {
    let validCharacters: ICharacters[] = [];

    while (validCharacters.length < initialState.requiredCharacters) {
        try {
            const { data } = await fetchAllCharacters(initialState.offset, initialState.limit);

            const filteredCharacters = data.results.filter(({ thumbnail: { path } }: ICharacters) => {
                return !path.endsWith('image_not_available') && !path.endsWith('4c002e0305708');
            });

            validCharacters = [...validCharacters, ...filteredCharacters];

            initialState.offset += initialState.limit;

        } catch (err) {
            console.log("Помилка під час запиту:", err);
            break;
        }

        if (validCharacters.length >= initialState.requiredCharacters) {
            validCharacters = validCharacters.slice(0, initialState.requiredCharacters);
            break;
        }
    }

    charactersList.insertAdjacentHTML('beforeend', createMarkup(validCharacters));
}

function loadMoreCharacters() {
    filterValidateCharacters();
}

function createMarkup(arr: ICharacters[]): string {
    return arr.map(({ name, resourceURI, thumbnail: { extension, path } }) => {
        return `
            <li class="characters__item" data-url='${resourceURI}'>
                <img src="${path}.${extension}" alt="${name}" class="characters__img" />
                <p class="characters__name">${name}</p>
            </li>
        `;
    }).join('');
}

