const cardsContainer = document.getElementById("cards-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const currentElement = document.getElementById("current");
const showButton = document.getElementById("show");
const hideButton = document.getElementById("hide");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const addCardButton = document.getElementById("add-card");
const clearButton = document.getElementById("clear");
const addContainer = document.getElementById("add-container");


let currentActiveCard = 0;
const cardsElement = [];

const cardsData = [
    {
        question: "How does I use this website?",
        answer: "Write a question on the front, and write the answer on the back!",
    },
    {
        question: "What if I put a card in incorrectly?",
        answer: "You can clear all cards and start again.",
    },
    {
        question: "What does HTML stand for?",
        answer: "Hypertext Markup Language",
    },
];