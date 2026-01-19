import { handleSearch } from './scripts/searchHandler.js';
import { createSearchCards, renderToElement } from './scripts/ui.js';

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('country-input');
    const button = document.getElementById('fetch-data-btn');
    const output = document.getElementById('output');
    const searchesContainer = document.getElementById('searches');

    const savedHistory = JSON.parse(localStorage.getItem('searches')) || [];

    if (savedHistory.length > 0) {
        const historyCard = createSearchCards(savedHistory);
        renderToElement(searchesContainer, historyCard); 
    }

    button.addEventListener('click', async () => handleSearch(input, output, 'Please enter a country name.'));

    input.addEventListener('keypress', async (event) => {
        if (event.key === 'Enter') {
            await handleSearch(input, output, 'Please enter a country name.');
        }
    });
});