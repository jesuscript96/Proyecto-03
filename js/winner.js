

function updateHTML2() {

    document.getElementById("textGanador").innerHTML = `¡Felicidades ${sessionStorage.getItem("jug2Name")}, eres el campeón!`;

}
function updateHTML3() {

    document.getElementById("textGanador").innerHTML = `¡Felicidades ${sessionStorage.getItem("jug1Name")}, eres el campeón!`;

}

function updateHTMLWinner() {
    let winnerFinal = sessionStorage.getItem("Ganador")
    console.log(winnerFinal)
    console.log(typeof(winnerFinal))

    if (winnerFinal == "true") {
        updateHTML2();
    } else if (winnerFinal == "false") {
        updateHTML3();
    }
    

}
updateHTMLWinner();


