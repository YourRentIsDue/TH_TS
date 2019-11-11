
//Header
let header = document.createElement("header");

var playButton=document.createElement("audio");
playButton.setAttribute("id", "audio_play")
var audioSource=document.createElement("source");
audioSource.setAttribute ("src", "dejaVu.mp3")
audioSource.setAttribute ("type", "audio/mpeg");
playButton.appendChild(audioSource);
header.appendChild(playButton);

let logo = document.createElement("img");
logo.setAttribute("src", "Photos/turbohedgehogs3.png");
logo.setAttribute("onClick", "togglePlay()");
logo.setAttribute("alt", "TurboLogo");
logo.setAttribute("id", "logo");
header.appendChild(logo);

var isPlaying = false;

function togglePlay (){
    if (isPlaying){
        document.getElementById('audio_play').pause();
        isPlaying=false;
        
    }
    else {
        document.getElementById('audio_play').play();
        isPlaying=true;
    }
};





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
    ["Memes","memes.html"],
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