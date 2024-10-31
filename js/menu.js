const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})
// Obtener referencias a los elementos
const textareaComentarios = document.getElementById("comentarios");
const btnEnviarComentario = document.getElementById("btn-enviar-comentario");
const btnBorrarComentario = document.getElementById("btn-borrar-comentario");

// Evento para enviar el comentario
btnEnviarComentario.addEventListener("click", () => {
    const comentario = textareaComentarios.value;
    if (comentario) {
        Toastify({
            text: "Comentario enviado",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            style: {
                background: "linear-gradient(to right, #4CAF50, #8BC34A)",
                borderRadius: "2rem",
                textTransform: "uppercase",
                fontSize: ".75rem"
            },
        }).showToast();
        
        // Aquí puedes implementar la lógica para almacenar el comentario si es necesario
        console.log("Comentario enviado:", comentario); // Solo un ejemplo de uso
    } else {
        Toastify({
            text: "Por favor, escribe un comentario antes de enviar.",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            style: {
                background: "linear-gradient(to right, #e74c3c, #ff4757)",
                borderRadius: "2rem",
                textTransform: "uppercase",
                fontSize: ".75rem"
            },
        }).showToast();
    }
});

// Evento para borrar el comentario
btnBorrarComentario.addEventListener("click", () => {
    textareaComentarios.value = ""; // Limpiar el textarea
    Toastify({
        text: "Comentario borrado",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        style: {
            background: "linear-gradient(to right, #FF5722, #FF9800)",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: ".75rem"
        },
    }).showToast();
});