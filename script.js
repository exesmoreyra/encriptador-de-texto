function encriptar() {
    let inputText = document.getElementById('inputText').value;
    let outputText = btoa(inputText); 
    document.getElementById('outputText').value = outputText;
}

function desencriptar() {
    let inputText = document.getElementById('inputText').value;
    let outputText;
    try {
        outputText = atob(inputText); 
    } catch (e) {
        outputText = 'Texto no válido para desencriptar';
    }
    document.getElementById('outputText').value = outputText;
}

function copiarTexto() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); 
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
