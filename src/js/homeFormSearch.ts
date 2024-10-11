const pageHeadeForm = document.querySelector('.js-page-header__form') as HTMLFormElement 
const input = document.querySelector('.js-page-header__input') as HTMLInputElement

function onSubmit(evt: Event) {
    evt.preventDefault()

    const value = input.value.trim()
    input.value = input.value


    window.location.href = `https://feshchenkoevgeniy.github.io/Marvelous-Adventures-Characters/characters.html?search=${encodeURIComponent(value)}`
}

pageHeadeForm.addEventListener('submit', onSubmit)