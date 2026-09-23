// console.log("Mensaje recibido");

const socket = io();


const input = document.getElementById('textoEntrada');
const log = document.getElementById('log');

// Emito mensaje al servidor cuando el usuario presiona Enter en el input
input.addEventListener('keyup', evt => {

    // console.log(`Tecla presionada: ${evt.key}`);
    if (evt.key === "Enter") {
        // console.log(`Enviando mensaje: ${input.value}`);
        socket.emit('message2', input.value);
        input.value = ""
    }
});


// Escucho los logs del servidor y los muestro en el div log
socket.on('log', data => {
    let logs = '';
    data.logs.forEach(log => {
        logs += `${log.socketid} dice: ${log.message}<br/>`
    })
    log.innerHTML = logs;
});
