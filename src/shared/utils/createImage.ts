export function createImage(imageElement: string): HTMLImageElement {
  const img = document.createElement("img");
  const imageBlob = imageElement[0] as unknown as Blob;
  img.src = URL.createObjectURL(imageBlob);
  img.alt = "image";
  /* Release the image */
  img.onload = () => {
    URL.revokeObjectURL(img.src);
  };

  return img;
}
