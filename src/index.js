import './styles.css';
import debounce from 'lodash.debounce';

//refs

const refs = {
  input: document.querySelector('#countries'),
};

//debounced input

refs.input.addEventListener('input', debounce (event => {
        event.preventDefault();
        console.log(event.target.value);
      }, 500))



