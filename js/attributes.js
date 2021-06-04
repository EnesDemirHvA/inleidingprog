
// DOM elementen

var charname;
var pointlimit = 10;

var points = {};
var strenghtpoints = 0;
var charismapoints = 0;
var inteligencepoints = 0;
var staminapoints = 0;
var speedpoints = 0;
 	
// Toevoegen variables

var addstrenght = document.getElementById("strenght");
var addinteligence = document.getElementById("inteligence");
var addcharisma = document.getElementById("charisma");
var addstamina = document.getElementById("stamina");
var addspeed = document.getElementById("speed");
var buttonName = document.getElementById("buttonName");

// Afnemen variables
var remstrenght = document.getElementById("strenghtrem");
var reminteligence = document.getElementById("inteligencerem");
var remcharisma = document.getElementById("charismarem");
var remstamina = document.getElementById("staminarem"); 
var remspeed = document.getElementById("speedrem");

var buttonName = document.getElementById("buttonName");

// Met dit functie word de punten aangepast

function changepoints(){
	document.getElementById('strenghtpoints').textContent = strenghtpoints; 
	document.getElementById('inteligencepoints').textContent = inteligencepoints; 
	document.getElementById('charismapoints').textContent = charismapoints; 
	document.getElementById('staminapoints').textContent = staminapoints; 
	document.getElementById('speedpoints').textContent = speedpoints;
    document.getElementById('points').textContent = pointlimit; 	
}

changepoints();

// De "Strenght" Toevoegen en verwijderen van Totaal Punten(pointlimit)

function addStrenght(){ 
  if (pointlimit > 0){
  strenghtpoints = strenghtpoints + 1;
  pointlimit = pointlimit - 1;
  console.log("You now have Strenght " + strenghtpoints);
  }
  else{
  alert("You don't have any points left");
  }
  changepoints(); 
} 

function removeStrenght(){
  if (strenghtpoints > 0){
  strenghtpoints = strenghtpoints - 1;
  pointlimit = pointlimit + 1;
  console.log("You now have Strenght " + strenghtpoints);
  } 
  else{
  alert("You don't have any points in this skill");
  }
  changepoints();
}

// De "Inteligence" Toevoegen en verwijderen van Totaal Punten(pointlimit)

function addInteligence(){
  if (pointlimit > 0){
 inteligencepoints = inteligencepoints + 1;
  pointlimit = pointlimit - 1;
  console.log("You now have inteligence" + inteligencepoints);
  } 
  else{
  alert("You don't have any points left");
  }
  changepoints();
} 

function removeInteligence(){
  if (inteligencepoints > 0){
  inteligencepoints = inteligencepoints - 1;
  pointlimit = pointlimit + 1;  
  console.log("You now have inteligence" + inteligencepoints);
  }
  else{
  alert("You don't have any points in this skill");
  }
  changepoints(); 
}


// De "Charisma" Toevoegen en verwijderen van Totaal Punten(pointlimit)

function addCharisma(){
  if (pointlimit > 0){
  charismapoints = charismapoints + 1;
  pointlimit = pointlimit - 1;
  console.log("You now have charisma " + charismapoints);
  }
  else {
  alert("You don't have any points left");
  } 
  changepoints();
} 

function removeCharisma(){
  if (charismapoints > 0){
  charismapoints = charismapoints - 1;
  pointlimit = pointlimit + 1
  console.log("You now have charisma " + charismapoints);;  
  }
  else{
  alert("You don't have any points in this skill");
  }
  changepoints();
}

// De "Stamina" Toevoegen en verwijderen van Totaal Punten(pointlimit)

function addStamina(){
  if (pointlimit > 0){
  staminapoints = staminapoints + 1;
  pointlimit = pointlimit - 1;
  console.log("You now have stamina " + staminapoints);
  } 
  else{
  alert("You don't have any points left");
  }
  changepoints();
} 

function removeStamina(){
  if (staminapoints > 0){
  staminapoints = staminapoints - 1;
  pointlimit = pointlimit + 1;  
  console.log("You now have stamina " + staminapoints);
  }
  else{
  alert("You don't have any points in this skill");
  }
  changepoints();
}

// De "Speed" Toevoegen en verwijderen van Totaal Punten(pointlimit)

function addSpeed(){
  if (pointlimit > 0){
  speedpoints = speedpoints + 1;
  pointlimit = pointlimit - 1;
  console.log("You now have speed " + speedpoints);
  } 
  else{
  alert("You don't have any points left");
  }  
  changepoints();
} 

function removeSpeed(){
  if (speedpoints < 0){
  alert("You don't have any points in this skill");
  }
  else
  if (speedpoints > 0){
  speedpoints = speedpoints - 1;
  pointlimit = pointlimit + 1;  
  console.log("You now have speed " + speedpoints);
  }
  changepoints();
}

// Geeft je Karakter een naam
function addName(){
var nameText = document.getElementById("nameCharacter");
charname = nameText.value;
console.log(charname);
document.getElementById('myId').textContent = charname;
}

// Eventlisteners
addstrenght.onclick = addStrenght;
remstrenght.onclick = removeStrenght;
addinteligence.onclick = addInteligence;
reminteligence.onclick = removeInteligence;
addcharisma.onclick = addCharisma;
remcharisma.onclick = removeCharisma;
addstamina.onclick = addStamina;
remstamina.onclick = removeStamina;
addspeed.onclick = addSpeed;
remspeed.onclick = removeSpeed;

buttonName.onclick = addName;