const shedegi = document.getElementById("shedegi");
const sheniBedi = document.getElementById("shenibedi");

const phrases = [
  "მანქანა გაგიტანს",
  "დანას გაგიყრიან",
  "თავს ჩამოიხრჩობ რადგან ცხოვრება მოგწყინდება",
  "მეხი დაგეცემა",
  "დაიხრჩობი",
];

const horrorMusic = new Audio("./horrorMusic.mp3");

sheniBedi.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * phrases.length);
  let randomPhrase = phrases[randomNum];
  shedegi.innerText = randomPhrase;
  horrorMusic.play();
});
