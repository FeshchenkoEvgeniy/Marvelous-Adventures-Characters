function getCategory() {
    if (window.innerWidth <= 767) {
        return { limit: 5, offset: 0, requiredCharacters: 5, currentCategory: 'mobile' };
    } else if (window.innerWidth <= 1439) {
        return { limit: 8, offset: 0, requiredCharacters: 8, currentCategory: 'tablet' };
    } else {
        return { limit: 16, offset: 0, requiredCharacters: 16, currentCategory: 'desktop' };
    }
}

export {getCategory}