import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/Angeler.css';
import { defaults } from '@pnotify/core';
import { error } from '@pnotify/core';

defaults.styling = 'angeler';
defaults.icons = 'angeler';

function errorFetch() {
  error({
    title: 'Oh No!',
    text: `Such country doesn't exist`,
    delay:1000,
  });
}

function errorQuerySpecific() {
  error({
    title: 'Too many matches found!',
    text: 'Please, create more specific query',
    delay:1000,
  });
}

 export { errorFetch, errorQuerySpecific }
