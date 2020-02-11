var stuffEle = document.body.querySelector(".stuff");

var userinput = Number(prompt("enter a number up to 5 "));
var playerdamage = 0;
var dragondamage = 0;
var playerhealth = 5;
var dragonhealth = 10;

while (playerhealth > 0 && dragonhealth > 0){
  if (userinput > 5){
    playerdamage = 1
  }else{
    
    playerdamage = Math.floor((Math.random() * userinput) + 1);
  }
  dragonhealth = dragonhealth - playerdamage
  if (dragonhealth > 0){
    dragondamage = Math.floor((Math.random() * 2) + 1);
    playerhealth = playerhealth - dragondamage
  }

  }
if (playerhealth > 0){
  stuffEle.innerHTML = "the player won"
  console.log("Game over. the player won")
}else{
  stuffEle.innerHTML = "Game over. the dragon won"
  console.log("the dragon won")
}