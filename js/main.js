import { renderPhotos } from './rendering.js';
import { initForm } from './form.js';
import { getData } from './network.js';
import { showAlert } from './popup.js';

getData(renderPhotos, showAlert).then(() => initForm());

