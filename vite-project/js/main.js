import '../css/style.css'
import { DOMselectors } from './dom.js'
import { dice } from './dice.js'

function rollDice(diceRolled) {
  const rolls = []
  for(let i = 0; i < diceRolled; i++) {
    const randomValue = dice[
      Math.floor(Math.random() * dice.length)
    ];
    rolls.push(randomValue);
  };
  return rolls;
};

function addRolls(outcomes) {
  return outcomes.reduce((accumulator, roll) => 
    accumulator + roll.value, 0
  );
};

DOMselectors.rollForm.addEventListener("submit", function(event) {
  event.preventDefault();
  DOMselectors.outcomes.innerHTML = "";
  const diceRolled = parseInt(DOMselectors.rollOptions.value);
  const outcomes = rollDice(diceRolled);
  outcomes.forEach(roll => {
    DOMselectors.outcomes.insertAdjacentHTML(
      "beforeend",
      `
        <div class="dice">
          <img src="${roll.image}" alt="You rolled a ${roll.value}." class="dice-image"><br>
          <h3 class="dice-value">${roll.value}</h3>
        </div>
      `
    );
  });
  DOMselectors.totalValue.innerHTML = `Total Sum: ${addRolls(outcomes)}`
});