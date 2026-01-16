import { addToFavorites } from './manageLocalStorage.js';

export function createCountryCard(country) {
    const card = document.createElement('div');
    card.classList.add('country-card');

    card.innerHTML = `
        <img src="${country.flags.svg}" alt="Flag" width="200">
        <h1>${country.name.common}</h1>
        <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Subregion:</strong> ${country.subregion}</p>
        <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
        <p><strong>Area:</strong> ${country.area} km</p>
        <p><strong>Map:</strong> <a href="${country.maps.googleMaps}"> Google Maps</a></p>

        <p class="add-to-fave-btn"><strong>Add to favorites</strong></p>
    `;

    const faveBtn = card.querySelector('.add-to-fave-btn');
    faveBtn.addEventListener('click', () => {
        addToFavorites(country);
    });

    return card;
}

export function createSearchCards(country) {
    const card = document.createElement('div');
    card.classList.add('search-card');

    const recent = countriesArray.slice(-5).reverse();
    recent.forEach(c => {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${c.name.common}</strong>`;
        p.style.cursor = 'pointer';
        card.appendChild(p);
    });

    return card;
}

export function renderToElement(parent, childElement) {
    parent.innerHTML = '';
    parent.appendChild(childElement);
}