document.addEventListener('DOMContentLoaded', function() {
    const inputTexto = document.querySelector('.texto');
    const resultadoTexto = document.getElementById('resultado');
    const btnEncriptar = document.querySelector('.btn-encriptar');
    const btnDesencriptar = document.querySelector('.btn-desencriptar');
    const btnCopiar = document.querySelector('.content-resultado button');

    const encriptarLlaves = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };

    function encriptarTexto(texto) {
        return texto.replace(/[eioua]/g, function(match) {
            return encriptarLlaves[match];
        });
    }

    function desencriptarTexto(texto) {
        let desencriptado = texto;
        desencriptado = desencriptado.replace(/enter/g, "e");
        desencriptado = desencriptado.replace(/imes/g, "i");
        desencriptado = desencriptado.replace(/ai/g, "a");
        desencriptado = desencriptado.replace(/ober/g, "o");
        desencriptado = desencriptado.replace(/ufat/g, "u");
        return desencriptado;
    }

    function validarTexto(texto) {
        const regex = /^[a-z\s]+$/;
        return regex.test(texto);
    }

    btnEncriptar.addEventListener('click', function() {
        const texto = inputTexto.value;

        if (validarTexto(texto)) {
            const textoEncriptado = encriptarTexto(texto);
            resultadoTexto.value = textoEncriptado;
        } else {
            alert('El texto solo debe contener letras minúsculas sin acentos ni caracteres especiales.');
        }
    });

    btnDesencriptar.addEventListener('click', function() {
        const texto = inputTexto.value;

        if (validarTexto(texto)) {
            const textoDesencriptado = desencriptarTexto(texto);
            resultadoTexto.value = textoDesencriptado;
        } else {
            alert('El texto solo debe contener letras minúsculas sin acentos ni caracteres especiales.');
        }
    });

    btnCopiar.addEventListener('click', function() {
        resultadoTexto.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles.');
    });
});
