import {getPhotos} from './get-photos.js'; // модуль с функцией для генерации фотокарточек
import {renderPhotos} from './rendering.js';
import { initForm } from './form.js';

const photos = getPhotos();
renderPhotos(photos);
initForm();
