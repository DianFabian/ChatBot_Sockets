function socket(io) {
    io.on("connection", (socket) => {
        socket.on("mensaje", (mensaje) => {
            const respuesta = obtenerRespuestaDelChatBot(mensaje);
            io.emit("respuesta", respuesta);
        });
    });
}

function obtenerRespuestaDelChatBot(mensaje) {
    const mensajeLowerCase = mensaje.toLowerCase();
    switch (mensajeLowerCase) {
        case "hola":
            return "¡Hola Diana!, estamos para ayudarte";
        case "me gustaria saber si tengo mensajes":
            return "Por el momento no tienes ningún mensaje";
        case "avisame cuando me lleguen":
            return "¿Algo mas?";
        case "por el momento no":
            return "Esta bien";
        case "gracias":
            return "¡Hasta Luego!";
        default:
            return "No logro comprender tu mensaje. ¿Podrías explicarlo de otra manera?";
    }
}

module.exports = socket;
