import { tryOnMounted, MaybeComputedRef, resolveUnref } from '@vueuse/core';
import { reactive } from 'vue';
import { ChooseMediaOptions } from '../useImage';

export interface UniChooseVideoOptions extends UniApp.ChooseVideoOptions {}
export type ChooseVideoOptions = MaybeComputedRef<UniChooseVideoOptions>;

export interface UniSaveVideoToPhotosAlbum extends UniApp.SaveVideoToPhotosAlbumOptions {}
export type SaveVideoToPhotosAlbumOptions = MaybeComputedRef<UniSaveVideoToPhotosAlbum>;

export interface UniGetVideoInfoOptions extends UniApp.GetVideoInfoOptions {}
export type GetVideoInfoOptions = MaybeComputedRef<UniGetVideoInfoOptions>;

export interface UniCompressVideoOptions extends UniApp.CompressVideoOptions {}
export type CompressVideoOptions = MaybeComputedRef<UniCompressVideoOptions>;

export interface UniOpenVideoEditorOptions extends UniApp.OpenVideoEditorOptions {}
export type OpenVideoEditorOptions = MaybeComputedRef<UniOpenVideoEditorOptions>;

export function useVideo() {
  const createVideoContext = (videoId: string, currentComponent?: any) => {
    let context: UniApp.VideoContext | undefined;
    tryOnMounted(() => {
      context = uni.createVideoContext(videoId, currentComponent);
    });
    return context;
  };
  const createContext = createVideoContext;

  const chooseVideo = (options?: ChooseVideoOptions) =>
    uni.chooseVideo(reactive({ ...resolveUnref(options) }));
  const choose = chooseVideo;

  const chooseMedia = (options?: ChooseMediaOptions) =>
    uni.chooseMedia(reactive({ ...resolveUnref(options) }));

  const saveVideoToPhotosAlbum = (options?: SaveVideoToPhotosAlbumOptions) =>
    uni.saveVideoToPhotosAlbum(reactive({ filePath: '', ...resolveUnref(options) }));
  const saveToPhotosAlbum = saveVideoToPhotosAlbum;

  const getVideoInfo = (options?: GetVideoInfoOptions) =>
    uni.getVideoInfo(reactive({ src: '', ...resolveUnref(options) }));
  const getInfo = getVideoInfo;

  const compressVideo = (options?: CompressVideoOptions) =>
    uni.compressVideo(reactive({ src: '', ...resolveUnref(options) }));
  const compress = compressVideo;

  const openVideoEditor = (options?: OpenVideoEditorOptions) =>
    uni.openVideoEditor(reactive({ filePath: '', ...resolveUnref(options) }));
  const openEditor = openVideoEditor;

  return {
    createVideoContext,
    createContext,
    chooseVideo,
    choose,
    chooseMedia,
    saveVideoToPhotosAlbum,
    saveToPhotosAlbum,
    getVideoInfo,
    getInfo,
    compressVideo,
    compress,
    openVideoEditor,
    openEditor,
  };
}
