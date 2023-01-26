let numeroSorteado = 0;
let dado = document.querySelector('#dado');
let btnSortear = document.querySelector('#btnSortear');
let Sorteado = document.querySelector('#sorteado');

//carregando som
const dadoRolando = new Audio();
dadoRolando.src = './assets/dado-rolando.mp3';

btnSortear.addEventListener('click' , function () {
    // adicionar a animacao
    dado.classList.add('animar')
    Sorteado.classList.add('aparecer')

    //tocar efeito sonoro
    dadoRolando.play();

    //ocultar botão sortear
    btnSortear.style.display = 'none';

    //usando serTimeout para delay de 1.75 segundos antes de executar
    setTimeout(function() {
        //armazena numero sorteado
        numeroSorteado = sortear(1,6);
        console.log(numeroSorteado);

        //definir atributo src com base no numero
        dado.setAttribute('src' , '../img/'+numeroSorteado+'.png');
        //escrever na tela
        Sorteado.textContent = numeroSorteado;

        //exibir botao sortear
        btnSortear.style.display = 'inline-block';

        //retirar animação
        dado.classList.remove('animar');
        dado.classList.remove('aparecer');

    },1750);
});

//função gerar numero aleatorio
function sortear(min, max) {
    min = Math.ceil(min) //arredonda para cima = teto
    max = Math.floor(max) //arredonda para baixo = piso
    return Math.floor(Math.random() * (max - min + 1)) + min
};