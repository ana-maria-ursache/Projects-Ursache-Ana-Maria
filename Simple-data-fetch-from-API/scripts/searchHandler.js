import { fetchCountryData } from './api.js';
import { createCountryCard, createSearchCards, renderToElement } from './ui.js';
import {saveSearchToLocalStorage } from './manageLocalStorage.js';


export async function handleSearch(input, output, message) {
    const countryName = input.value.trim();
    const searchesContainer = document.getElementById('searches');
    
    if (!countryName) {
        const errorEl = document.createElement('p');
        errorEl.className = 'error';
        errorEl.textContent = message || 'Please try again.';
        renderToElement(output, errorEl);
        return;
    }

    try {
        const country = await fetchCountryData(countryName);

        saveSearchToLocalStorage(country.name.common);

        const updatedHistory = JSON.parse(localStorage.getItem('searches')) || [];
        const historyCard = createSearchCards(updatedHistory);
        renderToElement(searchesContainer, historyCard);

        const cardNode = createCountryCard(country);
        renderToElement(output, cardNode);

    } catch (error) {
        const errorOnSearch = document.createElement('p');
        errorOnSearch.className = 'error';
        errorOnSearch.textContent = error.message;
        renderToElement(output, errorOnSearch);
    }

}