

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/Angeler.css';
import { defaults } from '@pnotify/core';
import { error } from '@pnotify/core';

defaults.styling = "аngeler";

export default error;

// error ({
//   title: 'Oh No!',
//   text: 'Such country doesn't exist',
// })

// error ({
//   title: 'Too manu matches found!',
//   text: 'Please, create more specific query',
// })