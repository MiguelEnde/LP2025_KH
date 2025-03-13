import { Dado } from './dado.js';
import { guardarResultado, obtenerUltimoResultado } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
    const dado = new Dado('.cube');
    const boton = document.querySelector('#lanzarDado');
    const resultadoTexto = document.querySelector('#resultado');

    // Mostrar el último resultado guardado
    resultadoTexto.textContent = `Último resultado: ${obtenerUltimoResultado()}`;

    boton.addEventListener('click', () => {
        const resultado = Math.floor(Math.random() * 6) + 1;
        dado.lanzar();
        guardarResultado(resultado);
        resultadoTexto.textContent = `Último resultado: ${resultado}`;
    });
});
