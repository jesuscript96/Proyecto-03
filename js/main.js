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
        updateHTML();
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
            let winnerPrint = interruptor
            sessionStorage.setItem("Ganador", winnerPrint);
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






// function getName (name) {
//     sessionStorage.getItem(name);
// }

function updateHTML() {

    document.getElementById("partidajug1").innerHTML = sessionStorage.getItem("jug1Name");
    document.getElementById("partidajug2").innerHTML = sessionStorage.getItem("jug2Name");

    if (interruptor) {
        document.getElementById("indicadorTurno").innerHTML = `Juega ${sessionStorage.getItem("jug1Name")}`;
    } else {
        document.getElementById("indicadorTurno").innerHTML = `Juega ${sessionStorage.getItem("jug2Name")}`;
    }

}



function saveName() {

    let name1 = document.getElementById("jug1");
    let name2 = document.getElementById("jug2");

    let nombre1 = name1.value;
    let nombre2 = name2.value;

    sessionStorage.setItem("jug1Name", nombre1);
    sessionStorage.setItem("jug2Name", nombre2);

}



function saveRadios () {
    let radio1Humano = document.getElementById("jug1Humano").checked;
    let radio1Cpu = document.getElementById("jug1Cpu").checked;
    let radio2Humano = document.getElementById("jug2Humano").checked;
    let radio2Cpu = document.getElementById("jug2Cpu").checked;

    // let tipo1Humano = radio1Humano.value;
    // let tipo1Cpu = radio1Cpu.value;
    // let tipo2Humano = radio2Humano.value;
    // let tipo2Cpu = radio2Cpu.value;

    // sessionStorage.setItem("jug1Humano", tipo1Humano);
    // sessionStorage.setItem("jug1Cpu", tipo1Cpu);
    // sessionStorage.setItem("jug2Humano", tipo2Humano);
    // sessionStorage.setItem("jug2Cpu", tipo2Cpu);

    sessionStorage.setItem("jug1Humano", radio1Humano);
    sessionStorage.setItem("jug1Cpu", radio1Cpu);
    sessionStorage.setItem("jug2Humano", radio2Humano);
    sessionStorage.setItem("jug2Cpu", radio2Cpu);
    
}

function saveInfoPlayers () {
    saveName ();
    saveRadios();
}

function showRadius () {
    let dimelo = sessionStorage.getItem("jug1Humano");
    let dimelo2 = sessionStorage.getItem("jug1Cpu");
    let dimelo3 = sessionStorage.getItem("jug2Humano");
    let dimelo4 = sessionStorage.getItem("jug2Cpu");
    console.log("soy", dimelo)
    console.log("soy2", dimelo2)
    console.log("soy3", dimelo3)
    console.log("soy4", dimelo4)
    if (dimelo == "true") {
        console.log("exito")
    }

}

showRadius ()
updateHTML();

// function saveRadio {
//     let name1 = document.getElementById("jug1");
//     let name2 = document.getElementById("jug2");

//     let nombre1 = name1.value;
//     let nombre2 = name2.value;

//     sessionStorage.setItem("jug1Name", nombre1);
//     sessionStorage.setItem("jug2Name", nombre2);
// }



// function saveRadios () {
//     let radio1Humano = document.getElementById("jug1Humano");
//     let radio1Cpu = document.getElementById("jug1Cpu");
//     let radio2Humano = document.getElementById("jug2Humano");
//     let radio2Cpu = document.getElementById("jug2Cpu");

//     let tipo1Humano = radio1Humano.value;
//     let tipo1Cpu = radio1Cpu.value;
//     let tipo2Humano = radio2Humano.value;
//     let tipo2Cpu = radio2Cpu.value;

//     sessionStorage.setItem("jug1Humano", tipo1Humano);
//     sessionStorage.setItem("jug1Cpu", tipo1Cpu);
//     sessionStorage.setItem("jug2Humano", tipo2Humano);
//     sessionStorage.setItem("jug2Cpu", tipo2Cpu);
    
// }
