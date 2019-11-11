
//Header
let header = document.createElement("header");

let logo = document.createElement("img");
logo.setAttribute("src", "Photos/turbohedgehogs3.png");
logo.setAttribute("alt", "TurboLogo");
logo.setAttribute("id", "logo");
header.appendChild(logo);
//Nav Bar
let navBar = document.createElement("nav");

let arrayOfLocations = [ //First element name, second element href
    ["Home","#"],
    ["About","About.html"],
    ["Map","map.html"],
    ["Blog", "blog.html"],
    ["Events","#"],
    ["Local Tourism","#"],
    ["Gallery","GalleryHome.html"],
    ["Memes","#"],
    ["Contact","#"]
];

let navItems = document.createElement("ul");

for(let count = 0; count<arrayOfLocations.length;count++){

    let listElement = document.createElement("li");
    let listLink = document.createElement("a");
    let listText = document.createTextNode(arrayOfLocations[count][0]);
    listLink.setAttribute("href", arrayOfLocations[count][1]);
    listLink.appendChild(listText);
    
    listElement.appendChild(listLink);
    navItems.appendChild(listElement);
};
navBar.appendChild(navItems);
header.appendChild(navBar);

//Footer

let footer = document.createElement("footer");
let footerP = document.createElement("p");
let footerPText = document.createTextNode(" (c)TurboHedgehogs 2019");
footerP.appendChild(footerPText);
footer.appendChild(footerP);

//Putting the header and footer into the document

var body = document.getElementsByTagName("BODY")[0];

body.appendChild(header);
body.appendChild(footer);