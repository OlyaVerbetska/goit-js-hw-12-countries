import './styles.css';
import debounce from 'lodash.debounce';
import countriesList from './templates/countries-list.hbs';
import oneCountry from './templates/one-country.hbs';

//refs

const refs = {
  input: document.querySelector('#countries'),
  container: document.querySelector('.contriesContainer'),
};

//debounced input

refs.input.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();
    console.log(event.target.value);
  }, 500),
);

//fetch

const searchQuery = 'e';
fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
  .then(response => response.json())
  .then(data => updateMarkup(data));

function updateMarkup(data) {
  if (data.length === 1) {
    MarkupOne(data);
    return;
  }
  if (data.length > 10) {
    console.log('many');
    return;
  } else {
    MarkupList(data);
  }
}

function MarkupOne(data) {
  const markup = oneCountry(data);
  refs.container.insertAdjacentHTML('beforeend', markup);
}
function MarkupList(data) {
  const markup = countriesList(data);
  refs.container.insertAdjacentHTML('beforeend', markup);
}
