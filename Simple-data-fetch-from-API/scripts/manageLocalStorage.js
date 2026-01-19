export function saveSearchToLocalStorage(countryName) {
    let searches = JSON.parse(localStorage.getItem('searches')) || [];

    if (!searches.includes(countryName)) {
        searches.push(countryName);
        localStorage.setItem('searches', JSON.stringify(searches));
    }
    else if (searches.includes(countryName)) {
        const index = searches.indexOf(countryName);
        searches.splice(index, 1);
        searches.push(countryName);
        localStorage.setItem('searches', JSON.stringify(searches));
    }
}

export function addToFavorites(country) {
    let favorites = JSON.parse(localStorage.getItem('favCountries')) || [];

    const isAlreadyFav = favorites.some(fav => fav.name.common === country.name.common);

    if (!isAlreadyFav) {
        favorites.push(country.name.official);
        localStorage.setItem('favCountries', JSON.stringify(favorites));
    } else {
        alert('This country is already in the favorites list.');
    }

    return favorites;
}