



function getBinaryNum(numLengh) {
    /* Generate a binary number */ 

    // Can only have the size of an octet or an IP address
    if (numLengh == 8 || numLengh == 32) {  
        let bin = "";
        for (let i=0; i<=numLengh-1 ; i++ ) {
            bin += Math.floor(Math.random()*2); // Generate 0 or 1
        }
        return bin;
    }
    return null;
}


function convertResult(bin) {  // NOT WORKING
    /* Convert binary number into decimal */
    let result = 0;
    for (let i=0; i<= bin.length-1;i++) {
        if (bin[i] == 1) {
            result += 2**(i+1);
        }
    }
    return result;
}

function checkResult() {
    /* Check if the user input is right */
    let userAnswer = document.getElementById("guess-field").value ;
    let actualBin = document.getElementById("display-field").value ;

    if (userAnswer == convertResult(actualBin)) {
        console.log = "WIN";
    } else {
        console.log = "LOSE";
    }

}


document.getElementById("display-field").value = getBinaryNum(8);
getBinaryNum(8);

