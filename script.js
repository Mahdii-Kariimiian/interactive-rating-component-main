let submitEl = document.getElementById("submit-el");
let rateEl = document.getElementById("rate-el");
let oneEl = document.getElementById("1");
let twoEl = document.getElementById("2");
let threeEl = document.getElementById("3");
let fourEl = document.getElementById("4");
let fiveEl = document.getElementById("5");
let score;

oneEl.addEventListener("click", function(e) {
    score = 1;
    e.target.style.backgroundColor = 'hsl(25, 97%, 53%)';
    console.log(score);
})

twoEl.addEventListener("click", function(e) {
    score = 2;
    e.target.style.backgroundColor = 'hsl(25, 97%, 53%)';
    console.log(score);
})

threeEl.addEventListener("click", function(e) {
    score = 3;
    e.target.style.backgroundColor = 'hsl(25, 97%, 53%)';
    console.log(score);
})

fourEl.addEventListener("click", function(e) {
    score = 4;
    e.target.style.backgroundColor = 'hsl(25, 97%, 53%)';
    console.log(score);
})

fiveEl.addEventListener("click", function(e) {
    score = 5;
    e.target.style.backgroundColor = 'hsl(25, 97%, 53%)';
    console.log(score);
})

submitEl.addEventListener("click", function() {
    rateEl.innerHTML = "You selected " + score + " out of 5";
});
