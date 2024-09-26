function showLoader() {
     const loader = document.querySelector(".js-loader") as HTMLElement; 
    if (loader) {
        loader.style.display = "block";
    }
}

function hideLoader() {
     const loader = document.querySelector(".js-loader") as HTMLElement; 
    if (loader) {
        loader.style.display = "none";
    }
}

export {showLoader, hideLoader}