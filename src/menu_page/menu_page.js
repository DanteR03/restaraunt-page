import menuImageOne from "./menu_img1.jpg";
import menuImageTwo from "./menu_img2.jpg";
import menuImageThree from "./menu_img3.jpg";
import menuImageFour from "./menu_img4.jpg";
import "./menu_page_style.css";

function menuPageLoad () {
    let mainContentContainer = document.querySelector("#content");
    mainContentContainer.innerHTML = "";
    let menuPageContainer = document.createElement("div");
    menuPageContainer.id = "menu";
    let menuItemContainerOne = document.createElement("div");
    menuItemContainerOne.classList.add("menu_item");
    let menuItemContainerTwo = document.createElement("div");
    menuItemContainerTwo.classList.add("menu_item");
    let menuItemContainerThree = document.createElement("div");
    menuItemContainerThree.classList.add("menu_item");
    let menuItemContainerFour = document.createElement("div");
    menuItemContainerFour.classList.add("menu_item");
    let menuItemImageOne = document.createElement("img");
    let menuItemNameOne = document.createElement("para");
    let menuItemPriceOne = document.createElement("para");
    menuItemImageOne.src = menuImageOne;
    menuItemImageOne.alt = "A picture of pizza";
    menuItemNameOne.textContent = "Pepperoni Pizza";
    menuItemPriceOne.textContent = "150";
    let menuItemImageTwo = document.createElement("img");
    let menuItemNameTwo = document.createElement("para");
    let menuItemPriceTwo = document.createElement("para");
    menuItemImageTwo.src = menuImageTwo;
    menuItemImageTwo.alt = "A picture of pizza";
    menuItemNameTwo.textContent = "Spicy Chicken Pizza";
    menuItemPriceTwo.textContent = "170";
    let menuItemImageThree = document.createElement("img");
    let menuItemNameThree = document.createElement("para");
    let menuItemPriceThree = document.createElement("para");
    menuItemImageThree.src = menuImageThree;
    menuItemImageThree.alt = "A picture of pizza";
    menuItemNameThree.textContent = "Cheesy Pizza";
    menuItemPriceThree.textContent = "200";
    let menuItemImageFour = document.createElement("img");
    let menuItemNameFour = document.createElement("para");
    let menuItemPriceFour = document.createElement("para");
    menuItemImageFour.src = menuImageFour;
    menuItemImageFour.alt = "A picture of pizza";
    menuItemNameFour.textContent = "Mexican Pizza";
    menuItemPriceFour.textContent = "165";
    menuItemContainerOne.append(menuItemImageOne, menuItemNameOne, menuItemPriceOne);
    menuItemContainerTwo.append(menuItemImageTwo, menuItemNameTwo, menuItemPriceTwo);
    menuItemContainerThree.append(menuItemImageThree, menuItemNameThree, menuItemPriceThree);
    menuItemContainerFour.append(menuItemImageFour, menuItemNameFour, menuItemPriceFour);
    menuPageContainer.append(menuItemContainerOne, menuItemContainerTwo, menuItemContainerThree, menuItemContainerFour);
    mainContentContainer.append(menuPageContainer);
}

export { menuPageLoad }