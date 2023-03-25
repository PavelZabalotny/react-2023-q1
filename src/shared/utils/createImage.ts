export function createImage(imageElement: HTMLInputElement): HTMLImageElement {
  const img = document.createElement("img");
  const imageBlob = imageElement.files?.[0] as Blob;
  img.src = URL.createObjectURL(imageBlob);
  img.alt = "image";
  /* Release the image */
  img.onload = () => {
    URL.revokeObjectURL(img.src);
  };

  return img;
}
