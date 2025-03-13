export const guardarResultado = (valor) => {
    localStorage.setItem('ultimoDado', valor);
};

export const obtenerUltimoResultado = () => {
    return localStorage.getItem('ultimoDado') || 'No hay registros';
};