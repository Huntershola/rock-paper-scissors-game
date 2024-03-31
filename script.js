
const handOptions= {
    "rock": "assets/Rock.png",
    "paper": "assets/Paper.png",
    "scissors": "assets/Scissors.png"
}
let SCORE = 0;

const pickUserHand = (hand) =>{

    // hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display="none";

    // show the next page with the hand you picked
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    // set the user pick
    
    document.getElementById("userPickImage").src = handOptions[hand];
    pickBotHand();

    let bpHand = pickBotHand();
    referee(hand, bpHand);

}

const pickBotHand = () => {
    let hands = ["rock", "paper", "scissors"]
    let bpHand = hands[Math.floor(Math.random() * 3)]

 

     // set the user pick
    document.getElementById("botPickImage").src = handOptions[bpHand];
    
    return bpHand;
    
}

const referee = (userHand, bpHand)=> {
    if(userHand == "paper" && bpHand == "scissors"){
        setDecision("YOU LOSE!")

    } 
    if (userHand == "paper" && bpHand == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
      if (userHand == "paper" && bpHand == "paper") {
        setDecision("It's a tie!");
      }
      if (userHand == "rock" && bpHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
      if (userHand == "rock" && bpHand == "paper") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "rock" && bpHand == "rock") {
        setDecision("It's a tie!");
      }
      if (userHand == "scissors" && bpHand == "scissors") {
        setDecision("It's a tie!");
      }
      if (userHand == "scissors" && bpHand == "rock") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "scissors" && bpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }

}

const restartGame = () => {
    let hands = document.querySelector(".hands");
    hands.style.display="flex";

    // show the next page with the ha nd you picked
    let contest = document.querySelector(".contest");
    contest.style.display = "none";

}
const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}
const setScore = (score) => {
    SCORE = score;
  document.querySelector(".score h1").innerText = score;
}