export const lightTheme = {
  body: "#EAD3CB",
  text: "#2E112D",
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: "252, 246, 244",
  textRgba: "0,0,0",
};

export const darkTheme = {
  body: "#2E112D",
  text: "#EAD3CB",
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: "0,0,0",
  textRgba: "252, 246, 244",
};

export const mediaQueries = (width) => {
  return (style) => `@media screen and (max-width: ${width}em) {${style}}`;
};
