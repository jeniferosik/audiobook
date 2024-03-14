const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');
const audioCapitulo = document.getElementById('audio-capitulo');

const conteudo = document.querySelector('.conteudo');

const numeroCapitulos = 61;
let estaTocando = 0;
let capituloAtual = 1;

function tocarFaixa() 
{
    audioCapitulo.play();
    botaoPlayPause.classList.remove('fa-circle-play');
    botaoPlayPause.classList.add('fa-circle-pause');
}

function pausarFaixa() 
{
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('fa-circle-pause');
    botaoPlayPause.classList.add('fa-circle-play');
}

function tocarOuPausar() 
{
    if (estaTocando === 0) 
    {
        tocarFaixa();
        estaTocando = 1;
    } 
    else 
    {
        pausarFaixa();
        estaTocando = 0;
    }
}

function trocarNomeFaixa() 
{
    nomeCapitulo.innerText = "Capítulo " + capituloAtual;
}

function proximaFaixa() 
{
    if (capituloAtual === numeroCapitulos) 
    {
        capituloAtual = 1;
    } 
    else 
    {
        capituloAtual++;
    }

    audioCapitulo.src = "./assets/books/pride_and_prejudice/Pride_and_Prejudice_" + capituloAtual + ".mp3";
    tocarFaixa();
    estaTocando = 1;

    trocarNomeFaixa();
}

function voltarFaixa() 
{
    if (capituloAtual === 1) 
    {
        capituloAtual = numeroCapitulos;
    } 
    else 
    {
        capituloAtual--;
    }

    audioCapitulo.src = "./assets/books/pride_and_prejudice/Pride_and_Prejudice_" + capituloAtual + ".mp3";
    tocarFaixa();
    estaTocando = 1;

    trocarNomeFaixa();
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);

