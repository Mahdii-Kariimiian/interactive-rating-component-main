
const ratingNumbers = document.querySelector(".rating-numbers")
const roundBackground = document.querySelectorAll(".hover")
const rateEl = document.getElementById("rate-el")
const submit = document.querySelector(".submit")
const thankyoustage = document.querySelector(".thankyoustage")
const ratingstate = document.querySelector(".ratingstate")
let forvalidation 
let myId

ratingNumbers.addEventListener("click" , function (number){
    if(number.target.id) {
        forvalidation = number.target.id
        myId = number.target.parentElement.children
        number.target.style.backgroundColor = "hsl(216, 12%, 54%)"
        roundBackground.forEach((rates)=>{
            if (myId[number.target.id] !== rates) {
                rates.style.backgroundColor = "rgb(50, 58, 73)"
            }
        })
        rateEl.innerText = parseFloat(number.target.id) + 1
    }
})

submit.addEventListener ("click" , ()=>{

    if (!forvalidation) {
        alert("dfudfyg")
        submit.removeEventListener("click" , ()=>{
            alert("dfudfyg")
        })
    } else {
        thankyoustage.classList.remove("hidden")
        ratingstate.classList.add("hidden")
    }
    
})
