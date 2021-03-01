console.log("welcome to homepage");
const homepage = function () {

    const contentDiv = document.querySelector("#content");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("restaurant-image");
    const bgImage = document.createElement("img");
    bgImage.setAttribute("src", "https://lh3.googleusercontent.com/xzdsVXNVJkKdRRemFMamSDGxbeYEZb6fBIZJ4O_-TI9eoN7VG6G3mmyi4eZJE4A05VTUdJA_GBk0hhXqTE8SZ-GxSvA=w1000");

    const centeredClass = document.createElement("div");
    centeredClass.classList.add("centered");
    centeredClass.innerText = "Tea Connect Cafe";
    const lineBreak = document.createElement("BR");
    const spanText = document.createElement("span");
    spanText.classList.add("smaller-text");
    spanText.innerText = "Amazing Restro near World Trade Park";



    contentDiv.appendChild(imageDiv);
    imageDiv.appendChild(bgImage);
    imageDiv.appendChild(centeredClass);
    centeredClass.appendChild(lineBreak);
    centeredClass.appendChild(spanText);

}

export { homepage };