let number = 0;
let num = Math.floor(Math.random() * 10); 
let count = 0;
function guessNumber() {
    let guessedNumber = parseInt(document.getElementById('t').value); 
    
    if (count<3 && guessedNumber === num) {
        console.log("You won!");
        count=0;
    }else if(count<2){
        if(guessedNumber<num){
            console.log("Try again! Enter higher number...");
        }else{
            console.log("Try again! Enter lower number...");
        }
       
        count++;
    }else{
        console.log("You lost! Winnig Number is "+num);
        count=0;
    }
}
