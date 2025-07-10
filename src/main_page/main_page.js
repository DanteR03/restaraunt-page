import mainImage from "./pepperoni_pizza.jpg";

function mainPageLoad () {
    let mainContentImage = document.createElement("img");
    let mainContentContainer = document.querySelector("#content");
    let mainContentHeader = document.createElement("h2");
    let mainContentPara = document.createElement("p");
    mainContentHeader.textContent = "About us";
    mainContentImage.src = mainImage;
    mainContentImage.alt = "Photo of pepperoni pizza";
    mainContentPara.textContent = `We sell the best pizza in the country! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus magna at nibh gravida, et ultrices tellus vestibulum. 
                Ut malesuada aliquam eros, suscipit feugiat massa tempor eu. Nam tristique efficitur suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc sit amet ante eget sapien bibendum pellentesque non vel tortor. Morbi ut mattis sem. Quisque varius ac nisi nec vehicula. Vestibulum feugiat ante vel sodales finibus.
                Cras sodales vel turpis vel porttitor. Proin sit amet tristique mi. Donec a rutrum quam.`;
    mainContentContainer.appendChild(mainContentImage);
    mainContentContainer.appendChild(mainContentHeader);
    mainContentContainer.appendChild(mainContentPara);
}

export { mainPageLoad }