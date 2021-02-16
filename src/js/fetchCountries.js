import error from './notifications.js';

function fetchCountry(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url)
    .then(response => response.json())
    .catch(
      error({
        title: 'Oh No!',
        text: 'Such country does not exist',
      }),
    );
}

export default fetchCountry;
