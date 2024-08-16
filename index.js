// Code your solutions in this file

function writeCards(nameProvided, event){
    let thankYouMessages = [] ;
        for ( let i = 0; i < nameProvided.length; i++ ) {
            thankYouMessages.push( `Thank you, ${nameProvided[i]}, for the wonderful ${event} gift!` );
        }   
    return thankYouMessages;  
}


function countDown(firstNumber){   
    while ( firstNumber > 0 ) { 
        console.log( firstNumber);  
        firstNumber -= 1 ;
    }
    console.log ( firstNumber);
}               