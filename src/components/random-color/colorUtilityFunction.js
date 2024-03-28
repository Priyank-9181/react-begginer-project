export const randomType = () => {
  const typesArray = ["hex", "rgb", "rgba"];
  const tempType = typesArray[Math.floor(Math.random() * typesArray.length)];
  return tempType;
};

const colorUtility = (length) => {
  return Math.floor(Math.random() * length);
};

const alphaRgbaUtility = () => {
  return Math.random().toFixed(1);
};

export const generateRandomHexColor = (setColor) => {
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hexArray[colorUtility(hexArray.length)];
  }

  setColor(hexColor);
};

export const generateRandomRgbColor = (setColor) => {
  const RgbColor = `rgb(${colorUtility(256)},${colorUtility(
    256
  )},${colorUtility(256)})`;

  setColor(RgbColor);
};

export const generateRandomRgbaColor = (setColor) => {
  const RgbaColor = `rgba(${colorUtility(256)},${colorUtility(
    256
  )},${colorUtility(256)},${alphaRgbaUtility()})`;

  setColor(RgbaColor);
};
