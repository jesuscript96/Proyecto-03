let interruptor = true;
let casillas = Array.from(document.getElementsByClassName("celda"))

casillas.map((casilla, /*index*/)=>{
    casilla.addEventListener ("click", ()=> {  
        // click ha representado el evento, la funcion anonima indicara que intrucciones debe seguir la app
        if (casilla.innerHTML == "") {
            casilla.innerHTML = (interruptor) ? "X" : "O"
            interruptor = !interruptor
            // comprobamos en otra funcion si hay un ganador
        }
    })
}); 