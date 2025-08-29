const choices = ['rock', 'paper', 'scissors'];
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const winnerDisplay = document.getElementById('winner');
const buttons = document.querySelectorAll('.choice-btn');
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function determineWinner(user, computer) {
  if (user === computer) return "Empate";
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return "Ganaste 🎉";
  } else {
    return "Perdiste 😞";
  }
}
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    userChoiceDisplay.textContent = `Tu elección: ${capitalize(userChoice)}`;
    computerChoiceDisplay.textContent = `Elección de la computadora: ${capitalize(computerChoice)}`;
    const result = determineWinner(userChoice, computerChoice);
    winnerDisplay.textContent = `Resultado: ${result}`;
  });
});
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}