

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

let casillas = Array.from(document.getElementsByClassName("celda"))

// casillas.map((casilla, /*index*/) => {
//     casilla.addEventListener("click", () => {
//         // click ha representado el evento, la funcion anonima indicara que intrucciones debe seguir la app

//         if (turnos > 6) {
//             if (casilla.innerHTML == "") {
//                 console.log("selecciona una ficha tuya")

//                 console.log(turnos)


//             }
//             else if (interruptor == true && casilla.innerHTML == "X" || interruptor != true && casilla.innerHTML == "O") {
//                 casilla.innerHTML = "";
//                 turnos = turnos - 1;
//                 console.log(turnos)
//             }
//             else {
//                 console.log("selecciona una ficha tuya")

//                 console.log(turnos)
//             }
//         }
//         else {
//             if (casilla.innerHTML == "") {
//                 casilla.innerHTML = (interruptor) ? jugador1pieza : jugador2pieza
//                 turnos++;
//                 console.log(turnos);
//                 interruptor = !interruptor;

//             }


//         }

//         ganar();
//         updateHTML();
//     })
// });

 
const playerCpu = () => {
    setTimeout (playerCpuTime, 500)
}

const playerCpuTime = () => {
    let randomTry = parseInt(parseInt(Math.random() * 9))
    console.log(randomTry)
    console.log(casillas[randomTry])
    console.log(casillas[randomTry].innerHTML)

    if (turnos > 6) {
        if (interruptor == true && casillas[randomTry].innerHTML == "X" || interruptor != true && casillas[randomTry].innerHTML == "O") {
            casillas[randomTry].innerHTML = "";
            turnos--
            while(casillas[randomTry].innerHTML != "random"){
                let randomTry4 = parseInt(parseInt(Math.random() * 9))
                
                if(casillas[randomTry4].innerHTML == "" && randomTry4 != randomTry) {
                    casillas[randomTry4].innerHTML = (interruptor) ? jugador1pieza : jugador2pieza
                    turnos++;
                    interruptor = !interruptor
                    console.log(turnos)
                    break;
                } else {
                    console.log("posición ocupada");
                }
            

        }

        }

        else   {
            while(casillas[randomTry].innerHTML != "random"){
                let randomTry5 = parseInt(parseInt(Math.random() * 9))
                if (interruptor == true && casillas[randomTry5].innerHTML == "X" || interruptor != true && casillas[randomTry5].innerHTML == "O") {
                    casillas[randomTry5].innerHTML = "";
                    turnos--
        
                    while(casillas[randomTry].innerHTML != "random"){
                        let randomTry7 = parseInt(parseInt(Math.random() * 9))
                        
                        if(casillas[randomTry7].innerHTML == "" && randomTry7 != randomTry5) {
                            casillas[randomTry7].innerHTML = (interruptor) ? jugador1pieza : jugador2pieza
                            turnos++;
                            interruptor = !interruptor
                            console.log(turnos)
                            break;
                        } else {
                            console.log("posición ocupada");
                        }
                    
        
                }
                    break;
                }
           // -------------------------------------
       

        
    } 
}}
    else {
        if (casillas[randomTry].innerHTML == "") {
            casillas[randomTry].innerHTML = (interruptor) ? jugador1pieza : jugador2pieza
            turnos++;
            interruptor = !interruptor
            console.log(turnos)
        } else { 
            while(casillas[randomTry].innerHTML != ""){
                let randomTry2 = parseInt(parseInt(Math.random() * 9))
                
                if(casillas[randomTry2].innerHTML == ""){
                    casillas[randomTry2].innerHTML = (interruptor) ? jugador1pieza : jugador2pieza
                    turnos++;
                    interruptor = !interruptor
                    console.log(turnos)
                    break;
                }else {
                    console.log("posición ocupada");
                }
        }}
    }
    
    ganar ();
}

const typeOfGame = () => {
   
    let radioJug1Humano = sessionStorage.getItem("jug1Humano");
    let radioJug2Humano = sessionStorage.getItem("jug2Humano");
    console.log("soy", radioJug1Humano)
    console.log("soy3", radioJug2Humano)


    if (radioJug1Humano == "true") {
        if (radioJug2Humano == "true") {
            humanoHumano ();
        } else {
            humanoCpu ();
        }
    } else {
        if (radioJug2Humano == "true") {
            cpuHumano ();
        } else {
            console.log("CPU cannot play CPU")
        }
    }
}

const humanoHumano = () => {
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
}

const humanoCpu = () => {
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
                    interruptor = !interruptor;
                    ganar();
                    playerCpu ()
    
                }
    
    
            }
    
           
            updateHTML();
        })
        
    });
}

const cpuHumano = () => {
    let randomTry10 = parseInt(parseInt(Math.random() * 9))
    console.log(randomTry10)
    console.log(casillas[randomTry10])
    console.log(casillas[randomTry10].innerHTML)
    casillas[randomTry10].innerHTML = "O"
    turnos++
    humanoCpu ()
}

const ganar = () => {
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

            // let radioJug1Humano = sessionStorage.getItem("jug1Humano");

            // if (radioJug1Humano != "true") {
            //     interruptor != interruptor
            // }
            
            let winnerPrint = interruptor

           
           
            sessionStorage.setItem("Ganador", winnerPrint);
            restart();
            window.location.href = "../pages/ganador.html";
            // redirect a la vista de ganador
        }
        else {

        }

    }

}

const restart = () => {
    turnos = 1
    // interruptor = true;
    for (i = 0; i < casillas.length; i++) {
        casillas[i].innerHTML = "";
    }
    typeOfGame ()

}

const updateHTML = () => {

    // Set names
    document.getElementById("partidajug1").innerHTML = sessionStorage.getItem("jug1Name");
    document.getElementById("partidajug2").innerHTML = sessionStorage.getItem("jug2Name");

    // set type of player
    let radioJug1Humano = sessionStorage.getItem("jug1Humano");
    let radioJug2Humano = sessionStorage.getItem("jug2Humano");

    
    if (radioJug1Humano == "true") {
        if (radioJug2Humano == "true") {
            document.getElementById("typeOfPlayer1").innerHTML = "Humano";
            document.getElementById("typeOfPlayer2").innerHTML = "Humano";
        } else {
            document.getElementById("typeOfPlayer1").innerHTML = "Humano";
            document.getElementById("typeOfPlayer2").innerHTML = "CPU";
        }
    } else {
        if (radioJug2Humano == "true") {
            document.getElementById("typeOfPlayer1").innerHTML = "CPU";
            document.getElementById("typeOfPlayer2").innerHTML = "Humano";
        } else {
            console.log("CPU cannot play CPU")
        }
    }
// set type of playerMark
    if (radioJug1Humano == "true") {
        if (radioJug2Humano == "true") {
            document.getElementById("markPlayer1").innerHTML = "X";
            document.getElementById("markPlayer2").innerHTML = "O";
        } else {
            document.getElementById("markPlayer1").innerHTML = "X";
            document.getElementById("markPlayer2").innerHTML = "O";
        }
    } else {
        if (radioJug2Humano == "true") {
            document.getElementById("markPlayer1").innerHTML = "O";
            document.getElementById("markPlayer2").innerHTML = "X";
        } else {
            console.log("CPU cannot play CPU")
        }
    }


    // set currentPlayer
    if (radioJug1Humano != "true") {
        document.getElementById("indicadorTurno").innerHTML = `Juega ${sessionStorage.getItem("jug2Name")}`;
    } else {
        if (interruptor) {
            document.getElementById("indicadorTurno").innerHTML = `Juega ${sessionStorage.getItem("jug1Name")}`;
        } else {
            document.getElementById("indicadorTurno").innerHTML = `Juega ${sessionStorage.getItem("jug2Name")}`;
        }
    }   
    
    }

const saveName = () => {

    let name1 = document.getElementById("jug1");
    let name2 = document.getElementById("jug2");

    let nombre1 = name1.value;
    let nombre2 = name2.value;

    sessionStorage.setItem("jug1Name", nombre1);
    sessionStorage.setItem("jug2Name", nombre2);

}

const saveRadios = () => {
    let radio1Humano = document.getElementById("jug1Humano").checked;
    let radio1Cpu = document.getElementById("jug1Cpu").checked;
    let radio2Humano = document.getElementById("jug2Humano").checked;
    let radio2Cpu = document.getElementById("jug2Cpu").checked;

    sessionStorage.setItem("jug1Humano", radio1Humano);
    sessionStorage.setItem("jug1Cpu", radio1Cpu);
    sessionStorage.setItem("jug2Humano", radio2Humano);
    sessionStorage.setItem("jug2Cpu", radio2Cpu);
    
}

const saveInfoPlayers = () => {
    saveName ();
    saveRadios();
    // typeOfGame ()
}

updateHTML();
typeOfGame ()