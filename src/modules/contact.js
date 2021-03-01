const contactpage = (() => {

    const contentDiv = document.querySelector("#content");


    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    const h1Tag = document.createElement("h1");
    h1Tag.innerText = "Contact Us";

    const spanTag = document.createElement("span");
    spanTag.classList.add("contact");
    const imgTag = document.createElement("img");
    imgTag.classList.add("google-map");
    imgTag.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmaps.mapmyindia.com%2Fplace-tea%2Bconnect%2Bcafe-b-16-lal%2Bbahadur%2Bnagar-near%2Bgenpact-girdhar%2Bmarg-near-malviya%2Bnagar-jaipur-rajasthan-302017-SC305Y%40zdata%3DMjYuODQ4MTY1Kzc1LjgwNDMwNSsxNytTQzMwNVkrK25yed&psig=AOvVaw1NspANqhCTBS_Lb4UeF6Gm&ust=1614466165740000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiMx6jRiO8CFQAAAAAdAAAAABAD";
    spanTag.textContent = "112 Malviya Nagar \r\n";
    spanTag.textContent += "Jaipur, Rajasthan \r\n";
    spanTag.textContent += "+91 93847-56892";
    const lineBreak = document.createElement("br");

    contentDiv.appendChild(containerDiv);
    containerDiv.appendChild(h1Tag);
    containerDiv.appendChild(imgTag);
    containerDiv.appendChild(lineBreak);
    containerDiv.appendChild(spanTag);

});

export { contactpage }