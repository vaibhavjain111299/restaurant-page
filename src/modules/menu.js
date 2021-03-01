const menupage = function () {
    const menuItems = [
        {
            name: "Lasagna - $120",
            desc: "Full of cheese."
        },
        {
            name: "Cheese grilled Sandwich - $40",
            desc: "Grilled with extra cheese."
        },
        {
            name: "Macarons - $20",
            desc: "Perfect dessert"
        }
    ]


    const contentDiv = document.querySelector("#content");


    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");

    const h1Tag = document.createElement("h1");
    h1Tag.innerText = "Menu";

    contentDiv.appendChild(containerDiv);
    containerDiv.appendChild(h1Tag);


    function addMenuItem(item) {
        let menuItemDiv = document.createElement("div");
        menuItemDiv.classList.add("menu-items");
        containerDiv.appendChild(menuItemDiv);

        let itemName = document.createElement("h4");
        menuItemDiv.appendChild(itemName);
        itemName.innerText = menuItems[item].name;

        let itemDesc = document.createElement("span");
        menuItemDiv.appendChild(itemDesc);
        itemDesc.innerText = menuItems[item].desc;

    }

    for (let i = 0; i < menuItems.length; i++) {
        addMenuItem(i);
    }

}

export { menupage };