import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  border: none;

  box-sizing: border-box;
}
*::before,
*::after {
  display: inline-block;
}
a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
}
li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}
html {
  font-size: 10px;
}
body {
  line-height: 1;
  height: 100%;
  font-family: system-ui;
  margin: 330px 0 0 0;
  background-image: url('/images/background_image.webp');
  color: #4a4a4a;
}

body::after {
  content: ""; 
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1); 
  z-index: -1; 
}

/* FORM */
input,
button,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  background-color: transparent;
}
input,
textarea {
  width: 100%;
}

label {
  display: inline-block;
}

button,
select,
option {
  cursor: pointer;
}
input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
  appearance: none;
}

input[type="number"] {
  appearance: textfield; 
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: auto; 
  }

  &::-moz-appearance {
    appearance: auto; 
  }
`;
