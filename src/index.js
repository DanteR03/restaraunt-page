import { mainPageLoad } from "./main_page/main_page.js";
import { menuPageLoad } from "./menu_page/menu_page.js";
import { contactPageLoad } from "./contact_page/contact_page.js";

mainPageLoad()

let homeButton = document.querySelector("#home");
let menuButton = document.querySelector("#menu");
let contactButton = document.querySelector("#contact");

homeButton.addEventListener("click", mainPageLoad);
menuButton.addEventListener("click", menuPageLoad);
contactButton.addEventListener("click", contactPageLoad);