// javascript





let countH = 0
let countG = 0

let countTXTH = document.getElementById("H")
let countTXTG = document.getElementById("G")


function up1H() {
    countH += 1
    countTXTH.innerText = countH
}


function up2H() {
    countH += 2
    countTXTH.innerText = countH
}


function up3H() {
    countH += 3
    countTXTH.innerText = countH
}



function up1G() {
    countG += 1
    countTXTG.innerText = countG
}


function up2G() {
    countG += 2
    countTXTG.innerText = countG
}


function up3G() {
    countG += 3
    countTXTG.innerText = countG
}




function reset() {
    countG = 0
    countH = 0
    countTXTG.innerText = countG
    countTXTH.innerText = countH
    
    
}