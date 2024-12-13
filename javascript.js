function getRandomBotMessage () {
    const messages = [
        "Creo que no.",
        "¡Totalmente!",
        "Eso suena interesante.",
        "No estoy seguro de entender, ¿puedes explicar más?",
        "¡Qué genial!",
        "Hmm, déjame pensar...",
        "¡Por supuesto!",
        "No sé, pero suena divertido.",
        "¿Puedes decirme más?",
        "Eso es un misterio para mí.",
        "¡Me encanta hablar contigo!"]

    return messages[Math.floor(Math.random() * messages.length)];
}

chat.scrollTop = chat.scrollHeight;

document.getElementById('enviar').addEventListener('click', function enviarMensaje() {

    const container = document.createElement('div');
    container.textContent = document.getElementById('text').value;
    container.classList.add('msg');
    document.getElementsByClassName('mensajes')[0].appendChild(container);
});

