document.addEventListener('DOMContentLoaded', () => {

const input = document.getElementById('country-input');
const button = document.getElementById('fetch-data-btn');
const output = document.getElementById('output');


button.addEventListener('click', () => {
    const countryName = input.value.trim();
    if (countryName) {
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Country not found');
                }
                return response.json();
            })
            .then(data => {
                const country = data[0];
                console.log(`Chosen: ${country.name.common}`);
                output.innerHTML = `
                    <div class="country-card">
                        <h1>${country.name.common}</h1>
                        <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
                        <p><strong>Region:</strong> ${country.region}</p>
                        <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
                        <img src="${country.flags.svg}" alt="Flag" width="200" style="border: 1px solid #ccc; margin-top: 10px;">
                    </div>
                `;
            })
            .catch(error => {
                alert(error.message);
            });
    } else {
        alert('Please enter a country name.');
    }
});
});