let secretNumber = getRandomInt(1, 20);
let versuche = 10;
document.querySelector(".ceck").onclick = function () {
  let userNumber = document.querySelector(".number").value;
  console.log(userNumber, secretNumber);
  if (userNumber > secretNumber) {
    console.log("Die gecheimzahl ist kleiner");
    document.querySelector(".tipp").innerHTML = "Die gecheimzahl ist kleiner";
  }

  if (userNumber < secretNumber) {
    console.log("Die gecheimzahl ist größer");
    document.querySelector(".tipp").innerHTML = "Die gecheimzahl ist größer  ";
  }

  if (userNumber == secretNumber) {
    console.log("DU hast es eratten!");
    document.querySelector(".tipp").innerHTML = "DU hast es eratten!";
    document.querySelector(".number").disabled = true;
    document.querySelector(".ceck").disabled = true;
  }

  versuche = versuche - 1;
  document.querySelector(".vse").innerHTML = versuche;
  if (versuche == 0) {
    document.querySelector(".number").disabled = true;
    document.querySelector(".ceck").disabled = true;
  }
};

document.querySelector(".start").onclick = function () {
  versuche = 10;
  secretNumber = getRandomInt(1, 20);
  document.querySelector(".vse").innerHTML = versuche;
  document.querySelector(".tipp").innerHTML =
    "Hier werde ich dir Tips geben / (0) (0)  ";
  document.querySelector(".number").disabled = false;
  document.querySelector(".number").value = "";
  document.querySelector(".number").focus();
  document.querySelector(".ceck").disabled = false;
};
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
