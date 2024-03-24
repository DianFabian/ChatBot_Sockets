const socket = io();

var enviarDatos = document.getElementById("enviarDatos");
var chatBox = document.getElementById("chatBox");

enviarDatos.addEventListener("submit", (e) => {
    e.preventDefault();
    var mensaje = document.getElementById("mensaje").value;

    mostrarMensajeEnChat("Tú", mensaje);
    socket.emit("mensaje", mensaje);
});

socket.on("respuesta", (respuesta) => {
    mostrarMensajeEnChat("Chat del Bot", respuesta);
});

function mostrarMensajeEnChat(emisor, mensaje) {
    var chatMensaje = document.createElement("p");
    chatMensaje.innerHTML = `<strong>${emisor}:</strong> ${mensaje}`;
    chatBox.appendChild(chatMensaje);
    document.getElementById("mensaje").value = ""; 
}
