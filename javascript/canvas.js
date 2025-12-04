/** @type {HTMLCanvasElement} */
const quadro = document.getElementById("Velaris");
const pincel = quadro.getContext("2d");

// Ajusta o tamanho do canvas
function tamanhoCanvas() {
    quadro.width = window.innerWidth;
    quadro.height = window.innerHeight;
}

window.addEventListener("resize", () => {
    tamanhoCanvas();
    numeroEstrelas = calcularEstrelas();
    gerarEstrelas(numeroEstrelas);
    desenhaEspaco();
});

tamanhoCanvas();
desenhaEspaco();

// Função para desenhar o fundo espacial
function desenhaEspaco() {
    const cx = quadro.width / 2;
    const cy = quadro.height / 2;
    const r1 = 10;
    const r2 = Math.max(quadro.width, quadro.height);

    const grad = pincel.createRadialGradient(cx, cy, r1, cx, cy, r2);
    grad.addColorStop(0, "#0b0f29");
    grad.addColorStop(1, "#000");

    pincel.fillStyle = grad;
    pincel.fillRect(0, 0, quadro.width, quadro.height);
}

// Array para armazenar as estrelas
let estrelas = [];

// Função para gerar estrelas aleatórias
function gerarEstrelas(qtd) {
    estrelas = [];

    for (let i = 0; i < qtd; i++) {
        const x = Math.random() * quadro.width;
        const y = Math.random() * quadro.height;
        const r = Math.random() * 1.5 + 0.5;
        const fase = Math.random() * Math.PI * 2;
        const velocidade = Math.random() * 0.005 + 0.01;

        estrelas.push({ x, y, r, fase, velocidade });
    }
}


//função que pega a largura da tela e calcula o valor de estrelas que vai ser gerado
function calcularEstrelas() {
    const largura = window.innerWidth;

    if (largura <= 600) { //Mobile
        return Math.floor(Math.random() * 200 + 700);
    } else if (largura <= 1400) { //Tablets grandes e notebooks
        return Math.floor(Math.random() * 300 + 700);
    } else if (largura <= 2200) { //Telas maiores de computador
        return Math.floor(Math.random() * 400 + 800);
    } else { //TV
        return Math.floor(Math.random() * 2000 + 3000);
    }
}

let numeroEstrelas = calcularEstrelas();

// Gera as estrelas inicialmente
gerarEstrelas(numeroEstrelas);


// Função para desenhar as estrelas
function desenharEstrelas() {
    estrelas.forEach(estrela => {
        estrela.fase += estrela.velocidade;
        const brilho = 0.2 + Math.sin(estrela.fase) * 0.3;

        pincel.fillStyle = `rgba(255, 255, 255, ${brilho})`;
        pincel.beginPath();
        pincel.arc(estrela.x, estrela.y, estrela.r, 0, Math.PI * 2);
        pincel.fill();
    });
}

// Função de animação
function animar() {
    desenhaEspaco();
    desenharEstrelas();
    requestAnimationFrame(animar);
}

animar();