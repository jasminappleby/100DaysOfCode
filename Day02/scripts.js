const wordElement = document.getElementById("word");
const wrongLettersElement = document.getElementById("wrong-letters");
const playAgainButton = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const finalMessageRevealWord = document.getElementById(
  "final-message-reveal-word"
);
const figureParts = document.querySelectorAll(".figure-part");


const words = [
    "squish",
    "frog",
    "pokemon",
    "piplup",
    "pizza",
    "jollof",
    "supermalt",
    "chicken",
    "lucozade",
    "supercalifragilisticexpialidocious",
    "bluebear",
    "animal crossing",
    "nintendo",
    "money",
    "bank account",
    "manifesting",
    "gaming",
    "netflix",
    "super mario",
    "vegetables"
];