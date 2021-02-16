import refs from '../js/refs.js';
import countriesList from '../templates/countries-list.hbs';
import oneCountry from '../templates/one-country.hbs';

function updateMarkup(data) {
  if (data.length === 1) {
    MarkupOne(data);
    return;
  }
  if (data.length > 2 && data.length < 10) {
    MarkupList(data);

    return;
  } else {
    console.log('many');
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

export default updateMarkup;
