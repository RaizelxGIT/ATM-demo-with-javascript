let amount = 20000;
let pin = "2222"
let attempts = 5;

function interact() {
let inputedPin = prompt("Please enter your pin")
if(inputedPin == pin){
let userAmount = Number(prompt("Please enter amount"))
if(userAmount < amount){
    amount = amount - userAmount
   alert("Transaction succesful, you have " + amount + " left")
} else {
    alert("Insufficient Balance")
}
} else if (inputedPin !== pin && attempts > 1) {

attempts = attempts - 1
alert("Incorrect pin, please try again. " + attempts + " attempts left")
} else{
alert("you have exhausted your attempts, try again in 5 years.")
}
}
