// funcion para encriptar 
function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// funcion para desencriptar 
function desencriptarTexto(textoEncriptado) {
    return textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// funcion para validar texto (solo minúsculas, sin acentos ni caracteres especiales)
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/; // Solo minusculas y espacios
    return regex.test(texto);
}
// funcion para cambiar entre modo día y modo nocturno
document.getElementById("toggleMode").addEventListener("click", function () {
    document.body.classList.toggle("night-mode");
});

document.getElementById("encriptarBtn").addEventListener("click", function () {
    let texto = document.getElementById("inputTexto").value.trim();

    if (!validarTexto(texto)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let textoEncriptado = encriptarTexto(texto);
    document.getElementById("outputTexto").value = textoEncriptado;
});

document.getElementById("desencriptarBtn").addEventListener("click", function () {
    let texto = document.getElementById("inputTexto").value.trim();

    if (!validarTexto(texto)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let textoDesencriptado = desencriptarTexto(texto);
    document.getElementById("outputTexto").value = textoDesencriptado;
});

// Funcion para copiar texto 
document.getElementById("copiarBtn").addEventListener("click", function () {
    let texto = document.getElementById("outputTexto").value;
    navigator.clipboard.writeText(texto).then(function () {
        alert("Texto copiado al portapapeles.");
    }, function () {
        alert("Error al copiar el texto.");
    });
});

// Funcion para limpiar los cuadros de texto
document.getElementById("limpiarBtn").addEventListener("click", function () {
    document.getElementById("inputTexto").value = "";
    document.getElementById("outputTexto").value = "";
});
