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
            console.log("GANADOR");
            restart();
            window.location.href = "../pages/ganador.html";
            // redirect a la vista de ganador

        }
        else {

        }

    }
}

// console.log(casillas[0].innerHTML)

function restart() {
    turnos = 1
    for (i = 0; i < casillas.length; i++) {
        casillas[i].innerHTML = "";
    }
    
}






const getName = () => {
    sessionStorage.getItem("jug1Name");
}

function updateHTML1() {
    let name = getName();
    name = JSON.stringify(name)
    document.getElementById("partidajug1").innerHTML = name;
}

function saveName() {
    // Gets input value
    let name = document.getElementById("jug1");
    name = name.value;
    let convertido = JSON.stringify(name)
    // Saves data to retrieve later
    sessionStorage.setItem("jug1Name", convertido);

}

const getName2 = () => {
    sessionStorage.getItem("jug2Name");
}

const updateHTML2 = () => {
    let name2 = getName2();
    name2 = JSON.stringify(name2)
    document.getElementById("partidajug2").innerHTML = name2;
}

const saveName2 = () => {
    // Gets input value
    let name2 = document.getElementById("jug2");
    name2 = name2.value;
    let convertido2 = JSON.stringify(name2)
    // Saves data to retrieve later
    sessionStorage.setItem("jug2Name", convertido2);

}

const getBothNames = 

const getBothNames = () => {
    updateHTML1();
    updateHTML2();
}

getBothNames();

//  recoger input en html y desplegar la funcion en el boton de siguiente pag
