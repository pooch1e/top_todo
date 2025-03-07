// index.js

import loadPage from "./loadpage";

// css styles
import "./styles.css";

document.addEventListener('DOMContentLoaded', () => {
  console.log("page load working");
  console.log(loadPage());
});
