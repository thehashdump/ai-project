let score = document.getElementById('score').textContent

let updatedSpeed = Math.round((score - 300) * (135 - 0) / (850 - 300) + 0);


document.getElementById("speedbox-score").style.transform = "rotate(" + updatedSpeed + "deg)";
document.getElementById("speedbox-score").style.transition ="transform 3s ease";




