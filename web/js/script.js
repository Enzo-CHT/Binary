


function getBinaryNum(numLengh) {
    /* Generate a binary number */ 

    // Can only have the size of an octet or an IP address
    if (numLengh == 8 || numLengh == 32) {  

        let bin = [];
        let index = 0; //Index for the Array
        let bytes = "";

        for (let i=1; i<=numLengh ; i++ ) {
            
            bytes += Math.floor(Math.random()*2); // Generate 0 or 1

            if ((i%8 == 0) && i!=0){
                
                //console.log(bytes)
                bin[index] = bytes;
                bytes = "";
                index++;

            }
        }

        //console.log(bin);
        return bin;
    }
    return null;
}


function convertResult(bin) { 
    /* Convert binary number into decimal */
    let result = 0;
    for (let i=0; i<=bin.length-1 ;i++) {
        if (bin[i] == 1) {
            result += 2**((bin.length-1)-i);
        }
    } 
    return result;
}



function checkAnswer(userInput, binaryArray) {
    /* Clean user input and compare it to the binary Array*/

    let ArrayOfInputs = []; 
    let indexOfInputs = 0;
    let inputContainer =""; //temporary variable to switch userInput into ArrayOfInputs
    
    for (let i=0; i<= userInput.length-1; i++) {
        if (userInput[i]==".") {

            ArrayOfInputs[indexOfInputs] = inputContainer;
            inputContainer ="";
            indexOfInputs++;

        } else {
            inputContainer += userInput[i]
            //console.log(inputContainer);
        }

        ArrayOfInputs[indexOfInputs] = inputContainer;
    }

    //console.log(ArrayOfInputs);

    
    if (actualMode == 8) {
        return ArrayOfInputs[0]==convertResult(binaryArray[0]);

    } else if (actualMode==32) {

        //console.log(ArrayOfInputs);
        //console.log(binaryArray);


        if (ArrayOfInputs.length==binaryArray.length) {
            for (let i=0; i<=ArrayOfInputs.length-1; i++) {
                if (ArrayOfInputs[i]!=convertResult(binaryArray[i])) {
                    return false;
                }
            }
            //If all the number are the same then .. 
            return true; 
        }


        return false; // If the lenght of the 2 Array not match
    }

}

function processGame() {
    /* Main function that start the game*/
    let userAnswer = document.getElementById("guess-field").value ;
    let actualBinaryArray = document.getElementById("display-field").value ;
    

    
    // If user has the right answer he wins else he fails 
    if (checkAnswer(userAnswer, actualBinaryArray)) {
        document.getElementById("statu").innerHTML = "Congrats!";
        setTimeout(function() {
            init(actualMode);
        },1000);

    } else {
        document.getElementById("statu").innerHTML = "Looser!";
        setTimeout(function() {
            init(actualMode);
        },1000);
    }

}


function init(mode) {
    /* 
    Initiate the game
    Depending on the mode of the game 
    */
    actualMode = mode; //Set the actual mode for all functions
    setTimeout('',500);
    document.getElementById("statu").innerHTML = "";
    document.getElementById("guess-field").value = "";

    let binaryArray = getBinaryNum(mode); //Array containing binary number(s)
    //console.log(binaryArray.length);
    if (mode == 8) {
        
        let byte = binaryArray[0];
        document.getElementById("display-field").innerHTML = byte;
        document.getElementById("display-field").value = binaryArray;

    } else if (mode == 32) {
        document.getElementById("display-field").innerHTML = "";

        let address = "";
        //console.log(binaryArray.length);
        for (let i=0; i<=(binaryArray.length)-1;i++ ) {

            let byte = binaryArray[i];
            address += byte;

            if (i!=3) {address+=".";} // Add a separator
            
            
        }
        //console.log(address);
        document.getElementById("display-field").innerHTML += address;
        document.getElementById("display-field").value = binaryArray; //Allow us to easily get the Array

    }
}

let actualMode = 0;
