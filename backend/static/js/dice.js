export class Dado {
    constructor(selector, tiempo = 2) {
        this.cube = document.querySelector(selector);
        this.tiempo = tiempo;
    }

    lanzar() {
        this.cube.style.transition = '';
        this.cube.style.transform = `translateY(400px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;

        setTimeout(() => {
            this.cube.style.transition = `transform ${this.tiempo}s`;
            const randomValue = Math.floor(Math.random() * 6) + 1;
            console.log(`Dado: ${randomValue}`);
            
            this.aplicarTransformacion(randomValue);
        }, this.tiempo * 10);
    }

    aplicarTransformacion(valor) {
        const transformaciones = {
            1: 'rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)',
            2: 'rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)',
            3: 'rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)',
            4: 'rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)',
            5: 'rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)',
            6: 'rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)'
        };

        this.cube.style.transform = `translateY(400px) ${transformaciones[valor]}`;
    }
}
