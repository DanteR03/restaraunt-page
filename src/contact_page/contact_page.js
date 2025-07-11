import "./contact_page_style.css";

function contactPageLoad () {
    let mainContentContainer = document.querySelector("#content");
    let contactPageContainer = document.createElement("div");
    contactPageContainer.id = ("contact");
    let contactHeaderOne = document.createElement("h3");
    contactHeaderOne.textContent = "Contacts";
    let contactParaOne = document.createElement("p");
    contactParaOne.textContent = "123-456-789";
    let contactParaTwo = document.createElement("p");
    contactParaTwo.textContent = "@PizzaHouse";
    let contactHeaderTwo = document.createElement("h3");
    contactHeaderTwo.textContent = "Address";
    let contactParaThree = document.createElement("p");
    contactParaThree.textContent = "City, street, 1";
    mainContentContainer.innerHTML = "";
    contactPageContainer.append(contactHeaderOne, contactParaOne, contactParaTwo, contactHeaderTwo, contactParaThree);
    mainContentContainer.append(contactPageContainer);
}

export { contactPageLoad }