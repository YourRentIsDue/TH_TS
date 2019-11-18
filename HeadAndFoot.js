
//Header
let header = document.createElement("header");

//creating <audio> tag
var playButton=document.createElement("audio");
playButton.setAttribute("id", "audio_play")
var audioSource=document.createElement("source");
audioSource.setAttribute ("src", "dejaVu.mp3")
audioSource.setAttribute ("type", "audio/mpeg");
playButton.appendChild(audioSource);
header.appendChild(playButton);


//creating logo
let logo = document.createElement("img");
logo.setAttribute("src", "Photos/turbohedgehogs3.png");
logo.setAttribute("alt", "TurboLogo");
logo.setAttribute("id", "logo");
header.appendChild(logo);
//creating onclick even to animate the logo and play song
logo.setAttribute("onClick", "togglePlay(), animation();");

//variable to keep track of whether it is playing or not
var isPlaying = false;


//function that either plays or pauses song depending on isPlaying
function togglePlay (){
    if (isPlaying){
        document.getElementById('audio_play').pause(); //pauses song
        isPlaying=false; //sets playing to false
        
    }
    else {
        document.getElementById('audio_play').play(); //plays song
        isPlaying=true; // sets playing to true
    }
};


//function that animates the logo
function animation (){
    var elem = document.getElementById('logo'); //gets the logo element
    var position =0; //creates a variable to keep track of where the logo is
    var id = setInterval (frame, 10); //plays a frame every ten ms (100fps Can set to less for better performance)
    var loop=false; //variable that keeps track of whether or not the logo has already traveled all the way to the right


    function frame (){

        if (position >52){ //if logo is offscreen to the right, put it offscreen to the left
            position=-50;
            elem.style.left= position + '%';
            loop= true;
            
        }

        else if (!loop) { // if logo is still not at the right edge of the screen move it to the right
            position+=1;
            elem.style.left= position +'%';
            console.log (elem.style.left);
            console.log (position);
        }

        else if (loop){ //if it already reached the right edge of the screen check whether it's in the middle yet, if not move it to the right until it is
            if (position===0) { 
                clearInterval(id);
            }
            else {   
            position+=1;
            console.log (elem.style.left);
            console.log (position);
            elem.style.left= position + '%';
            }
        }
    }

            
            
}

    
//Nav Bar
let navBar = document.createElement("nav");

let arrayOfLocations = [ //First element name, second element href
    ["Home","index.html"],
    ["About","about.html"],
    ["Map","map.html"],
    ["Blog", "blog.html"],
    ["Events","Calendar.html"],
    ["Local Tourism","localTourism.html"],
    ["Gallery","GalleryHome.html"],
    ["Memes","memes.html"],
    ["Contact","Contact.html"],
    ["Support","SupportUs.html"],
    ["Members", "Members.html"]
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
