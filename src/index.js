// index.js
//dependencies

import loadPage from "./loadpage";

// css styles
import "./styles.css";
//bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


document.addEventListener('DOMContentLoaded', () => {
  console.log("page load working");
  console.log(loadPage());
});
