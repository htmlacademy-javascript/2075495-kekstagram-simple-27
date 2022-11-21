import { getPhotos } from './get-photos.js'; // модуль с функцией для генерации фотокарточек
import { renderPhotos } from './rendering.js';
import { initForm } from './form.js';
import {getData} from './network.js';
import {showAlert, successSubmitHandler, errorSubmitHandler} from './util.js';

const photos = getPhotos();
renderPhotos(photos);
initForm();
getData(renderPhotos, showAlert).then(() => initForm(successSubmitHandler, errorSubmitHandler));

