const quote=["Success is not final, failure is not fatal: it is the courage to continue that counts."
    ,"Believe you can and you're halfway there."
    ,"Your time is limited, so don’t waste it living someone else’s life."
    ,"The only way to do great work is to love what you do."
    ,"Do what you can, with what you have, where you are."
    ,"Don’t watch the clock; do what it does. Keep going."
    ,"Dream big and dare to fail."
    ,"Opportunities don't happen. You create them."
    ,"Happiness depends upon ourselves."
    ,"Difficulties in life are intended to make us better, not bitter."];


let click=document.getElementsByClassName("btn-generate")[0];
let divOfQuote=document.getElementsByClassName("quote")[0];
// console.log(divOfQuote[0].innerHTML)

click.onclick =function(){
   
         let randomNumber=Math.floor(Math.random()*quote.length);
        divOfQuote.innerHTML=quote[randomNumber];
    
}

