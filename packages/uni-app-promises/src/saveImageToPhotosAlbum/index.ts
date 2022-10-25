import { simplePromisify } from '../utils';

export const saveImageToPhotosAlbum = simplePromisify(uni.saveImageToPhotosAlbum);
