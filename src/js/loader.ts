const loader = document.querySelector(".js-loader") as HTMLElement; 

function showLoader() {
    if (loader) {
        loader.style.display = "block";
    }
}

function hideLoader() {
    if (loader) {
        loader.style.display = "none";
    }
}

export {showLoader, hideLoader}