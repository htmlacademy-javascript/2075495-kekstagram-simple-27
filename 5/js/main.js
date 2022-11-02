import {getPhotos} from './createphotos.js'; // модуль с функцией для генерации фотокарточек
import {renderPictures} from 'rendering.js';
renderPictures(getPhotos());
