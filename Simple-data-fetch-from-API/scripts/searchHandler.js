import { fetchCountryData } from './api.js';
import { createCountryCard, renderToElement } from './ui.js';

export async function handleSearch(input, output, message) {
    const countryName = input.value.trim();
    
    if (!countryName) {
        const errorEl = document.createElement('p');
        errorEl.className = 'error';
        errorEl.textContent = message || 'Please try again.';
        renderToElement(output, errorEl);
        return;
    }

    try {
        const country = await fetchCountryData(countryName);
        const cardHtml = createCountryCard(country);
        renderToElement(output, cardHtml);
    } catch (error) {
        const errorOnSearch = document.createElement('p');
        errorOnSearch.className = 'error';
        errorOnSearch.textContent = error.message;
        renderToElement(output, errorOnSearch);
    }

}