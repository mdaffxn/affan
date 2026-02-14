const games = [
  ["Coin Flip", "Heads or tails?"],
  ["Dice Roll", "Can you roll high?"],
  ["Lucky Number", "Guess if your number lands."],
  ["Rock-Paper-Scissors", "Beat the bot."],
  ["Treasure Box", "One box has coins."],
  ["Mystery Door", "Pick left or right."],
  ["Quick Draw", "Fast reflex challenge."],
  ["Number Duel", "Higher card wins."],
  ["Color Match", "Will colors match?"],
  ["Odd or Even", "Predict the result."],
  ["High Card", "Can you draw an ace?"],
  ["Spin Wheel", "Land on the jackpot."],
  ["Magic Cup", "Find the hidden ball."],
  ["Treasure Map", "Dig at the right spot."],
  ["Lucky Star", "Catch a bright star."],
  ["Penalty Kick", "Score vs keeper."],
  ["Race Sprint", "Outrun your rival."],
  ["Sky Jump", "Land safely."],
  ["Castle Defense", "Block the attack."],
  ["Alien Blaster", "Hit the target."]
];

const messages = {
  win: [
    "Big win! +10 points",
    "Nice! You nailed it (+10)",
    "Great move! +10",
    "Perfect! +10 points"
  ],
  lose: [
    "Missed it! -4 points",
    "Not this round (-4)",
    "Close one! -4 points",
    "Try again! -4"
  ]
};

const gameGrid = document.getElementById("game-grid");
const totalScoreEl = document.getElementById("total-score");
const gamesPlayedEl = document.getElementById("games-played");

let totalScore = 0;
let gamesPlayed = 0;

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function play(resultEl) {
  const won = Math.random() < 0.55;
  totalScore += won ? 10 : -4;
  gamesPlayed += 1;

  totalScoreEl.textContent = totalScore;
  gamesPlayedEl.textContent = gamesPlayed;

  resultEl.className = `result ${won ? "win" : "lose"}`;
  resultEl.textContent = pick(won ? messages.win : messages.lose);
}

games.forEach(([name, description]) => {
  const card = document.createElement("article");
  card.className = "game-card";

  const title = document.createElement("h3");
  title.textContent = name;

  const text = document.createElement("p");
  text.textContent = description;

  const button = document.createElement("button");
  button.textContent = "Play";

  const result = document.createElement("p");
  result.className = "result";

  button.addEventListener("click", () => play(result));

  card.append(title, text, button, result);
  gameGrid.append(card);
});
