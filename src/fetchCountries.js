export function fetchCountries(name) {
  return fetch(
    'https://restcountries.com/v3.1/name/{name}?fields=name',
    name,
    capital,
    population,
    flags,
    languages
  )
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(error => console.err(error));
}
