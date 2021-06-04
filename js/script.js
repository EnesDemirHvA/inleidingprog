// VARIABELEN SECTION

// Hier maak ik variablen aan voor images zodat ik het waarde van nul kan geven, en hieruit een loop kan maken door cijfers toe te voegen eraan. 
var imghelmet = 0;
var imgarmor = 0;
var imghands = 0;
var imgboots = 0;    

var clicksound = new Audio('snds/click.wav');

// Hier roep ik Images aan bij hun ID
var helmetchar = document.getElementById("helmet");
var armorchar = document.getElementById("armor");
var handschar = document.getElementById("hands");
var bootschar = document.getElementById("boots");

// Hier roep ik de buttons ook bij hun ID
var buttonnexthelmet = document.getElementById("button-nexthelmet");
var buttonprevhelmet = document.getElementById("button-prevhelmet");

var buttonnextarmor = document.getElementById("button-nextarmor");
var buttonprevarmor = document.getElementById("button-prevarmor");

var buttonnexthands = document.getElementById("button-nexthands");
var buttonprevhands = document.getElementById("button-prevhands");

var buttonnextboots = document.getElementById("button-nextboots");
var buttonprevboots = document.getElementById("button-prevboots");

// FUNCTIONS SECTION

// Image loops
function nextHelmet(){
     if(imghelmet===0){
    helmetchar.setAttribute("class","helmet1");
    imghelmet = imghelmet + 1;
    console.log("Helmet image " + imghelmet);
    }
    else
     if(imghelmet===1){
    helmetchar.setAttribute("class","helmet2");
    imghelmet = imghelmet + 1;
    console.log("Helmet image " + imghelmet);
    }
    else
     if(imghelmet===2){
    helmetchar.setAttribute("class","helmet3");
    imghelmet = imghelmet + 1;
    console.log("Helmet image " + imghelmet);
    }
    else
     if(imghelmet===3){
    helmetchar.setAttribute("class","helmet");
    imghelmet=0;
    console.log("Begin helmet loop image");
    }
	clicksound.play();
}

function prevHelmet(){
    if(imghelmet===0){
    helmetchar.setAttribute("class","helmet3");
    imghelmet=3;
    console.log("Helmet image " + imghelmet);
    }
    else
     if(imghelmet===3){
    helmetchar.setAttribute("class","helmet2");
    imghelmet = imghelmet - 1;
    console.log("Helmet image " + imghelmet);
    }
    else
     if(imghelmet===2){
    helmetchar.setAttribute("class","helmet1");
    imghelmet = imghelmet - 1;
    console.log("Helmet image " + imghelmet);
    }
    else
     if(imghelmet===1){
    helmetchar.setAttribute("class","helmet");
    imghelmet = imghelmet - 1;
	console.log("Begin helmet loop image");
    }
	clicksound.play();
}

function nextArmor(){
     if(imgarmor===0){
    armorchar.setAttribute("class","armor1");
    imgarmor = imgarmor + 1;
    console.log("Armor image " + imgarmor);
    }
    else
     if(imgarmor===1){
    armorchar.setAttribute("class","armor2");
    imgarmor = imgarmor + 1;
    console.log("Armor image " + imgarmor);
    }
    else
     if(imgarmor===2){
    armorchar.setAttribute("class","armor3");
    imgarmor = imgarmor + 1;
    console.log("Armor image " + imgarmor);
    }
    else
     if(imgarmor===3){
    armorchar.setAttribute("class","armor");
    imgarmor=0;
    console.log("Begin armor loop image");
    }
	clicksound.play();
}

function prevArmor(){
    if(imgarmor===0){
    armorchar.setAttribute("class","armor3");
    imgarmor=3;
    console.log("Armor image " + imgarmor);
    }
    else
     if(imgarmor===3){
    armorchar.setAttribute("class","armor2");
    imgarmor = imgarmor - 1;
    console.log("Armor image " + imgarmor);
    }
    else
     if(imgarmor===2){
    armorchar.setAttribute("class","armor1");
    imgarmor = imgarmor - 1;
    console.log("Armor image " + imgarmor);
    }
    else
     if(imgarmor===1){
    armorchar.setAttribute("class","armor");
    imgarmor = imgarmor - 1;
	console.log("Begin armor loop image");
    }
	clicksound.play();
}

function nextHands(){
     if(imghands===0){
    handschar.setAttribute("class","hands1");
    imghands = imghands + 1;
    console.log("hands image " + imghands);
    }
    else
     if(imghands===1){
    handschar.setAttribute("class","hands2");
    imghands = imghands + 1;
    console.log("hands image " + imghands);
    }
    else
     if(imghands===2){
    handschar.setAttribute("class","hands3");
    imghands = imghands + 1;
    console.log("hands image " + imghands);
    }
    else
     if(imghands===3){
    handschar.setAttribute("class","hands");
    imghands=0;
    console.log("Begin hands loop image");
    }
	clicksound.play();
}

function prevHands(){
    if(imghands===0){
    handschar.setAttribute("class","hands3");
    imghands=3;
    console.log("hands image " + imghands);
    }
    else
     if(imghands===3){
    handschar.setAttribute("class","hands2");
    imghands = imghands - 1;
    console.log("Armort image " + imghands);
    }
    else
     if(imghands===2){
    handschar.setAttribute("class","hands1");
    imghands = imghands - 1;
    console.log("hands image " + imghands);
    }
    else
     if(imghands===1){
    handschar.setAttribute("class","hands");
    imghands = imghands - 1;
	console.log("Begin hands loop image");
    }
	clicksound.play();
}

function nextBoots(){
     if(imgboots===0){
    bootschar.setAttribute("class","boots1");
    imgboots = imgboots + 1;
    console.log("boots image " + imgboots);
    }
    else
     if(imgboots===1){
    bootschar.setAttribute("class","boots2");
    imgboots = imgboots + 1;
    console.log("boots image " + imgboots);
    }
    else
     if(imgboots===2){
    bootschar.setAttribute("class","boots3");
    imgboots = imgboots + 1;
    console.log("boots image " + imgboots);
    }
    else
     if(imgboots===3){
    bootschar.setAttribute("class", "boots");
    imgboots=0;
    console.log("Begin boots loop image");
    }
	clicksound.play();
}

function prevBoots(){
    if(imgboots===0){
    bootschar.setAttribute("class","boots3");
    imgboots=3;
    console.log("boots image " + imgboots);
    }
    else
     if(imgboots===3){
    bootschar.setAttribute("class","boots2");
    imgboots = imgboots - 1;
    console.log("boots image " + imgboots);
    }
    else
     if(imgboots===2){
    bootschar.setAttribute("class","boots1");
    imgboots = imgboots - 1;
    console.log("boots image " + imgboots);
    }
    else
     if(imgboots===1){
    bootschar.setAttribute("class","boots");
    imgboots = imgboots - 1;
	console.log("Begin boots loop image");
    }
	clicksound.play();
}


// EVENTLISTENERS SECTION
buttonnexthelmet.onclick = nextHelmet;
buttonprevhelmet.onclick = prevHelmet;

buttonnextarmor.onclick = nextArmor;
buttonprevarmor.onclick = prevArmor;

buttonnexthands.onclick = nextHands;
buttonprevhands.onclick = prevHands;

buttonnextboots.onclick = nextBoots;
buttonprevboots.onclick = prevBoots;

//EINDE CUSTOMIZATION CODE

