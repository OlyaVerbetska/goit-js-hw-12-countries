import './styles.css';
import debounce from 'lodash.debounce';

//refs

const refs = {
  input: document.querySelector('#countries'),
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

const searchQuery = 'latvia';
fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
  .then(response => response.json())
  .then(data => Console(data));

function Console(data) {
  console.log(data);
  console.log(data.length);
  if (data.length === 1) {
      console.log(1);
      return
  }
  if (data.length > 10) {
      console.log('many');
      return
  }
  else {
      console.log('list')
  }
}
