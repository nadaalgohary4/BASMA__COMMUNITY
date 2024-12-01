const winners = [];
const maxWinners = 3;

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

const name = document.getElementById('name').value;
const phone = document.getElementById('phone').value;

if (winners.length < maxWinners && Math.random() < 0.5) { 
    winners.push({ name, phone });
    document.getElementById('winnerMessage').style.display = 'block';
} else {
    alert("Thank you for participating!");
}

console.log("Winners:", winners);
});
