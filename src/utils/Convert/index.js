/* eslint-disable no-restricted-syntax */
export default function ConvertObjectToFormData(data) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }
  return formData;
}

export const convertImages = (images) => {
  const imagesArray = [];

  if (images.length > 0) {
    for (let i = 0; i < images.length; i += 1) {
      const file = images[i];

      const reader = new FileReader();

      reader.onload = (e) => {
        imagesArray.push(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  }
  return imagesArray;
};
