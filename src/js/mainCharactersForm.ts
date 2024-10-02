import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/dark.css";
import { debounce } from "throttle-debounce";

const datePicker = document.querySelector('#date-picker') as HTMLInputElement
const jsFilterForm = document.querySelector('.js-filter-form') as HTMLFormElement

interface IfilterObj {
    comics: null | string,
    name: null | string,
    orderBy: null | string,
    date: null | string,
}

const obj: IfilterObj = {
        comics: null,
        name: null,
        orderBy: null,
        date: null
    }

function filterCharacters(evt: Event) {
    const target = evt.target as HTMLInputElement | HTMLSelectElement;

    switch (target.name) {
        case 'comics':
        obj.comics = target.value.replace(/[^0-9]/g, '')
        break;
        case 'name':
        obj.name = target.value
        break;
        case 'orderBy':
        obj.orderBy = target.value
        break;
    }
   console.log(obj)
}

    flatpickr(datePicker, {
    defaultDate: new Date(),
    allowInput: true,
    onClose: (selectedDates, dateStr, instance) => {
        if (!isValidDate(dateStr)) {
            Notiflix.Notify.failure('Invalid date format. Expected YYYY-MM-DD');
            instance.clear()
            obj.date = null
            return
        } else {
            obj.date = dateStr
        }
    }
});

function isValidDate(dateStr: string): boolean {
    return /^\d{4}-\d{2}-\d{2}$/.test(dateStr)
}


jsFilterForm.addEventListener('input', debounce(800, filterCharacters))