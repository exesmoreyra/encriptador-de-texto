function encriptar() {
    let inputText = document.getElementById('inputText').value;
    let outputText = btoa(inputText); // Simple base64 encoding
    document.getElementById('outputText').value = outputText;
}

function desencriptar() {
    let inputText = document.getElementById('inputText').value;
    let outputText;
    try {
        outputText = atob(inputText); // Simple base64 decoding
    } catch (e) {
        outputText = 'Texto no válido para desencriptar';
    }
    document.getElementById('outputText').value = outputText;
}

function copiarTexto() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

function limpiarTexto() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
}

function toggleMode() {
    document.body.classList.toggle('night-mode');
    let toggleButton = document.getElementById('toggleMode');
    if (document.body.classList.contains('night-mode')) {
        toggleButton.textContent = 'Modo Día';
    } else {
        toggleButton.textContent = 'Modo Nocturno';
    }
}
