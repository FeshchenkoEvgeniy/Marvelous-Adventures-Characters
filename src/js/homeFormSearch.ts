const pageHeadeForm = document.querySelector('.js-page-header__form') as HTMLFormElement 
const input = document.querySelector('.js-page-header__input') as HTMLInputElement

function onSubmit(evt: Event) {
    evt.preventDefault()

    const value = input.value.trim()
    input.value = input.value


    window.location.href = `http://localhost:5173/characters.html?search=${encodeURIComponent(value)}`
}

pageHeadeForm.addEventListener('submit', onSubmit)