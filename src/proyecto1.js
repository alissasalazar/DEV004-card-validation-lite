const luhnAlgorithm=(cardnumber) => {
    let tamaño = cardnumber.length;
    let count= 0 

    if(tamaño==16){
        for(let i=0; i<tamaño; i++){
            let currentDigit = parseInt(cardnumber[i]);
    
            if((i+2) % 2 == 0)
               if(( currentDigit *=2) >9)
                    currentDigit -=9;
            count += currentDigit;
        }
        return(count % 10 ==0);
    }
    else{return(false);

    }
    
} 
   const validate = () => {
      let cardnumber = document.getElementById("cardnumber");
      let result = document.getElementById("result");
      let message="";

      if (luhnAlgorithm(cardnumber.value)) {
        message= "Tu número de tarjeta de credito es válido";
      }
        // Show success in div#result
      
      else {message="Tu número de tarjeta de credito no es válido"; 
    }
        // Show error message in div#result
      result.textContent=message;
    }
