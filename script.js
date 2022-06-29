
// declare global variables 
let characterHP = 20;
let monsterHP = 10;
let characterAttack = 5;
let monsterAttack = 2;
let characterAC = 15;
let monsterAC = 10;

//attach function gets a random number between 1 and 20 for both character and monster and checks againts AC. If the roll is greater than the AC then damage is applied
function Attack() {
  let charResultsMessage = "";
  let monsterResultsMessage = "";
  let characterHPMessage = "";
  let monsterHPMessage = "";
  let charAttackRoll = Math.floor(Math.random() * 20) + 1;
  console.log(charAttackRoll);
  let monsterAttackRoll = Math.floor(Math.random() * 20) + 1;
  console.log(monsterAttackRoll);

  if (charAttackRoll >= monsterAC) {
    charResultsMessage = "You hit the  monster for 5 damage";
    monsterHP = monsterHP - 5;
  } else {
    charResultsMessage = "You miss the monster";
  }

  if (monsterAttackRoll >= characterAC) {
    monsterResultsMessage = "The monster hits you for 2 damage";
    characterHP = characterHP - 2;
  } else {
    monsterResultsMessage = "The monster misses you";
  }

  document.getElementById("char-attack-results").innerHTML = charResultsMessage;
  document.getElementById("monster-attack-results").innerHTML =
    monsterResultsMessage;
  document.getElementById("charHP").innerHTML = characterHP;
  document.getElementById("monsterHP").innerHTML = monsterHP;

  checkCharacterHP();
  checkMonsterHP();
  endGame();
}

//checking the characters HP and returning the results
function checkCharacterHP() {
  let characterDeathResults = "";
  if (characterHP > 0) {
    characterDeathResults = "You are still alive!";
  } else {
    characterDeathResults = "You are dead. So sad!";
  }

  document.getElementById("char-death").innerHTML = characterDeathResults;
}

//checking the monsters HP and returning the results
function checkMonsterHP() {
  let monsterDeathResults = "";
  if (monsterHP > 0) {
    monsterDeathResults = "The monster still lives!";
  } else {
    monsterDeathResults = "You have defeated the monster!";
  }

  document.getElementById("monster-death").innerHTML = monsterDeathResults;
}

//end the game and refresh the page
function endGame() {
    if (monsterHP <= 0) {
        alert("You have defeated the monster and won the fight!")
        location.reload();
    } else if(characterHP <= 0){
        alert("The monster has defeated you!")
        location.reload();
    }
}
