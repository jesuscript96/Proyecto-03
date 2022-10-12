let interruptor = true;
let jugador1pieza = "X";
let jugador2pieza = "O";
let turnos = 1;
const conditionToWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// let tableroActualizado = ["", "", "", "", "", "", "", "", ""];

let casillas = Array.from(document.getElementsByClassName("celda"))

casillas.map((casilla, /*index*/) => {
    casilla.addEventListener("click", () => {
        // click ha representado el evento, la funcion anonima indicara que intrucciones debe seguir la app

        if (turnos > 6) {
            if (casilla.innerHTML == "") {
                console.log("selecciona una ficha tuya")

                console.log(turnos)


            }
            else if (interruptor == true && casilla.innerHTML == "X" || interruptor != true && casilla.innerHTML == "O") {
                casilla.innerHTML = "";
                turnos = turnos - 1;
                console.log(turnos)
            }
            else {
                console.log("selecciona una ficha tuya")

                console.log(turnos)
            }
        }
        else {
            if (casilla.innerHTML == "") {
                casilla.innerHTML = (interruptor) ? jugador1pieza : jugador2pieza
                turnos++;
                console.log(turnos);
                interruptor = !interruptor;
            }


        }
        ganar();

    })
});


function ganar() {
    for (i = 0; i < conditionToWin.length; i++) {
        let checks = conditionToWin[i];
        let celdaOne = casillas[checks[0]].innerHTML;
        let celdaTwo = casillas[checks[1]].innerHTML;
        let celdaThree = casillas[checks[2]].innerHTML;
        // // console.log();
        // console.log(typeof(checks[0]))
        // console.log(checks[2])

        if (celdaOne == "" || celdaTwo == "" || celdaThree == "") {

        }
        else if (celdaOne == celdaTwo && celdaTwo == celdaThree) {
            console.log("GANADOR")
            window.location.href = "../pages/ganador.html";
        // redirect a la vista de ganador

        }
        else {

        }

    }
}
