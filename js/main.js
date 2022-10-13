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

function updateHTML () {
    // let name1 = getName("jug1Name");
    // let name2 = getName("jug2Name");

    document.getElementById("partidajug1").innerHTML = sessionStorage.getItem("jug1Name");
    document.getElementById("partidajug2").innerHTML = sessionStorage.getItem("jug2Name");
    // if (interruptor) {
    //     document.getElementById("indicadorTurno").innerHTML = sessionStorage.getItem("jug1Name");
    // } else {
    //     document.getElementById("indicadorTurno").innerHTML = sessionStorage.getItem("jug2Name");
    // }   


    if (interruptor) {
        document.getElementById("indicadorTurno").innerHTML = `Juega ${sessionStorage.getItem("jug1Name")}`;
    } else {
        document.getElementById("indicadorTurno").innerHTML = `Juega ${sessionStorage.getItem("jug2Name")}`;
    }

}

function updateHTML2 () {
    // if (!interruptor) {
        document.getElementById("textGanador").innerHTML = `¡Felicidades ${sessionStorage.getItem("jug1Name")}, eres el campeón!`;
    // } else {
    //     document.getElementById("textGanador").innerHTML = `¡Felicidades ${sessionStorage.getItem("jug1Name")}, eres el campeón!`;
    // }
}



function saveName() {
    // Gets input value
    let name1 = document.getElementById("jug1");
    let name2 = document.getElementById("jug2");
    // name = name.value;
    console.log("el nombre es,,,,,,", name1.value);
    console.log ("el nombre es,,,,,,", name1.value);
    let nombre1 = name1.value;
    let nombre2 = name2.value;

    sessionStorage.setItem("jug1Name", nombre1);
    sessionStorage.setItem("jug2Name", nombre2);

    // Código innecesario... solo me sirve a mi para recordar el error
    // let convertido1 = JSON.stringify(nombre1)
    // let convertido2 = JSON.stringify(nombre2)
    // // Saves data to retrieve later
    // sessionStorage.setItem("jug1Name", convertido1);
    // sessionStorage.setItem("jug2Name", convertido2);

}

updateHTML();
updateHTML2 ();
//  recoger input en html y desplegar la funcion en el boton de siguiente pag
