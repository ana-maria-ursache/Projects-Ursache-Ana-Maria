import { addToFavorites } from './manageLocalStorage.js';

import { handleSearch } from './searchHandler.js';

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

export function createSearchCards(searches) {
    const card = document.createElement('div');
    card.classList.add('search-card');

    const searchesArray = Array.isArray(searches) ? searches : [searches];
    const recent = searchesArray.slice(-5).reverse();
    recent.forEach(c => {
        const p = document.createElement('p');
        p.className = 'search-item';
        p.innerHTML = `<strong>${c}</strong>`;  
        p.style.cursor = 'pointer';
        p.addEventListener('click', async () => {
            const input = document.getElementById('country-input');
            const output = document.getElementById('output');
            input.value = c;
            await handleSearch(input, output);
        });
        card.appendChild(p);
    });

    return card;
}

export function renderToElement(parent, childElement) {
    parent.innerHTML = '';
    parent.appendChild(childElement);
}