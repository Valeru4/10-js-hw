const countryArr = 'https://restcountries.com/v3.1/name/'

export function fetchCountries(countries) {
    return fetch(`${countryArr}${countries}`)
    .then(response => response.json())
    .catch(error => console.log(error))
}
