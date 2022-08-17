export function useImage() {
  const chooseImage = (options: UniApp.ChooseImageOptions) => uni.chooseImage(options);
  const choose = chooseImage;

  const previewImage = (options: UniApp.PreviewImageOptions) => uni.previewImage(options);
  const preview = previewImage;

  const closePreviewImage = (options: UniApp.CallBackOptions) => uni.closePreviewImage(options);
  const closePreview = closePreviewImage;

  const getImageInfo = (options: UniApp.GetImageInfoOptions) => uni.getImageInfo(options);
  const getInfo = getImageInfo;

  const saveImageToPhotosAlbum = (options: UniApp.SaveImageToPhotosAlbumOptions) =>
    uni.saveImageToPhotosAlbum(options);
  const saveToPhotosAlbum = saveImageToPhotosAlbum;

  const compressImage = (options: UniApp.CompressImageOptions) => uni.compressImage(options);
  const compress = compressImage;

  return {
    chooseImage,
    choose,
    previewImage,
    preview,
    closePreviewImage,
    closePreview,
    getImageInfo,
    getInfo,
    saveImageToPhotosAlbum,
    saveToPhotosAlbum,
    compressImage,
    compress,
  };
}
