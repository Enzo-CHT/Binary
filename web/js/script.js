


function getBinaryNum(numLengh) {
    /* Generate a binary number */ 

    // Can only have the size of an octet or an IP address
    if (numLengh == 8 || numLengh == 32) {  
        let bin ="";
        for (let i=0; i<=numLengh-1 ; i++ ) {
            bin += Math.floor(Math.random()*2); // Generate 0 or 1
            if (numLengh==32 && i%8 ==0 && i!=0){
                // Add separators for IP address 
                bin += ".";
            }
        }
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

function checkResult() {
    /* Check if the user input is right */
    let userAnswer = document.getElementById("guess-field").value ;
    
    let actualBin = document.getElementById("display-field").innerHTML ;
    

    
    // If user has the right answer he wins else he fails 
    if (userAnswer == convertResult(actualBin)) {
        document.getElementById("statu").innerHTML = "Congrats!";
        setTimeout(function() {
            init(mode)
        },1000);

    } else {
        document.getElementById("statu").innerHTML = "Looser!";
        setTimeout(function() {
            init(mode)
        },1000);
    }

}


function init(num) {
    mode = num;
    setTimeout('',500);
    document.getElementById("statu").innerHTML = "";
    document.getElementById("display-field").innerHTML = getBinaryNum(num);
    getBinaryNum(8);
}

let mode = 0;
