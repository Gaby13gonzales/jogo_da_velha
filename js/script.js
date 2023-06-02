//variaveis
let btn1 = 0;
let btn2 = 0;
let btn3 = 0;
let btn4 = 0;
let btn5 = 0;
let btn6 = 0;
let btn7 = 0;
let btn8 = 0;
let btn9 = 0;
let controle = 0;
let jogadas = 0;
let finalJogo = Boolean(false);

// Jogadores
let jogador1 = null;
let jogador2 = null;

// Personagens
let ferrero = "url('image/ferrero.png')";
let churros = "url('image/churros.png')";
let casadinho = "url('image/casadinho.png')";
let brig = "url('image/brig.png')";
let bjo = "url('image/bjo.png')";
let bichodepe = "url('image/bichodepe.png')";

// Atribui imagens para escolha do personage
let doce1 = document.getElementById('doce1');
let doce2 = document.getElementById('doce2');
let doce3 = document.getElementById('doce3');
let doce4 = document.getElementById('doce4');
let doce5 = document.getElementById('doce5');
let doce6 = document.getElementById('doce6');

doce1.style.backgroundImage = ferrero;
doce2.style.backgroundImage = churros;
doce3.style.backgroundImage = casadinho;
doce4.style.backgroundImage = brig;
doce5.style.backgroundImage = bjo;
doce6.style.backgroundImage = bichodepe;

// Container
let sectionPersonagens = document.getElementById('containerPersonagens');
let sectionTabuleiro = document.getElementById('containerTabuleiro');

sectionTabuleiro.style.display = 'none';

//click botão 1
function clickBtn1() {
    let btn = document.getElementById('btn1');

    if (btn1 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn1 = "X"
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn1 = "O"
        }
    }
    verificaGanhador()
}

// Click botão 2
function clickBtn2() {

    let btn = document.getElementById('btn2')

    if (btn2 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn2 = "X"
        }
        else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn2 = "O";
        }
    }
    verificaGanhador()
}
// Click botão 3
function clickBtn3() {

    let btn = document.getElementById('btn3')

    if (btn3 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn3 = "X"
        }
        else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn3 = "O";
        }
    }
    verificaGanhador()
}
// Click botão 4
function clickBtn4() {
    let btn = document.getElementById('btn4')

    if (btn4 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn4 = "X"
        }
        else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn4 = "O";
        }
    }
    verificaGanhador()
}
// Click botão 5
function clickBtn5() {
    let btn = document.getElementById('btn5')

    if (btn5 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn5 = "X"
        }
        else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn5 = "O";
        }
    }
    verificaGanhador()
}
// Click botão 6
function clickBtn6() {
    let btn = document.getElementById('btn6')

    if (btn6 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn6 = "X"
        }
        else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn6 = "O";
        }
    }
    verificaGanhador()
}
// Click botão 7
function clickBtn7() {
    let btn = document.getElementById('btn7')

    if (btn7 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn7 = "X"
        }
        else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn7 = "O";
        }
    }
    verificaGanhador()
}
// Click botão 8
function clickBtn8() {
    let btn = document.getElementById('btn8')

    if (btn8 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn8 = "X"
        }
        else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn8 = "O";
        }
    }
    verificaGanhador()
}
// Click botão 9
function clickBtn9() {
    let btn = document.getElementById('btn9')

    if (btn9 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn9 = "X"
        }
        else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn9 = "O";
        }
    }
    verificaGanhador()
}


//Verifica ganhador
function verificaGanhador() {
    let lblJogador = document.getElementById("lblJogador");
    let lblJogadas = document.getElementById("lblJogadas");

    //Verifica se jogador X ganhou
    if (btn1 == 'X' && btn2 == 'X' && btn3 == 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 1 ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    if (btn4 == 'X' && btn5 == 'X' && btn6 == 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 1 ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    if (btn7 == 'X' && btn8 == 'X' && btn9 == 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 1 ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    if (btn1 == 'X' && btn4 == 'X' && btn7 == 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 1 ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    if (btn2 == 'X' && btn5 == 'X' && btn8 == 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 1 ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    if (btn3 == 'X' && btn6 == 'X' && btn9 == 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 1 ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    if (btn1 == 'X' && btn5 == 'X' && btn9 == 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 1 ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    if (btn3 == 'X' && btn5 == 'X' && btn7 == 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 1 ganhou!';
        lblJogadas.innerText = '';
        return;
    }


    //Verifica se jogador O ganhou
    if (btn1 == 'O' && btn2 == 'O' && btn3 == 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 2 ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    if (btn4 == 'O' && btn5 == 'O' && btn6 == 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 2 ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    if (btn7 == 'O' && btn8 == 'O' && btn9 == 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 2 ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    if (btn1 == 'O' && btn4 == 'O' && btn7 == 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 2 ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    if (btn2 == 'O' && btn5 == 'O' && btn8 == 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 2 ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    if (btn3 == 'O' && btn6 == 'O' && btn9 == 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 2 ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    if (btn1 == 'O' && btn5 == 'O' && btn9 == 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 2 ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    if (btn3 == 'O' && btn5 == 'O' && btn7 == 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 2 ganhou!';
        lblJogadas.innerText = '';
        return;
    }

    // Verifica se aconteceu empate
    if (jogadas == 9) {
        finalJogo = true;
        lblJogador.innerText = 'Deu velha!';
        lblJogadas.innerText = '';
        return;
    }

    if (controle == 0) {
        lblJogador.innerText = 'Jogador 1';
    } else {
        lblJogador.innerText = 'Jogador 2';
    }

    lblJogadas.innerText = '(' + (jogadas + 1) + 'ª Jogada)';

}

//Click do botão Reiniciar
function clickReiniciar() {
    btn1 = 0;
    btn2 = 0;
    btn3 = 0;
    btn4 = 0;
    btn5 = 0;
    btn6 = 0;
    btn7 = 0;
    btn8 = 0;
    btn9 = 0;
    controle = 0;
    jogadas = 0;
    finalJogo = false;

    // Reiniciar Botões
    let b1 = document.getElementById('btn1');
    let b2 = document.getElementById('btn2');
    let b3 = document.getElementById('btn3');
    let b4 = document.getElementById('btn4');
    let b5 = document.getElementById('btn5');
    let b6 = document.getElementById('btn6');
    let b7 = document.getElementById('btn7');
    let b8 = document.getElementById('btn8');
    let b9 = document.getElementById('btn9');

    b1.style.backgroundImage = '';
    b2.style.backgroundImage = '';
    b3.style.backgroundImage = '';
    b4.style.backgroundImage = '';
    b5.style.backgroundImage = '';
    b6.style.backgroundImage = '';
    b7.style.backgroundImage = '';
    b8.style.backgroundImage = '';
    b9.style.backgroundImage = '';

    // Reiniciar Label
    let lblJogador = document.getElementById('lblJogador');
    let lblJogadas = document.getElementById('lblJogadas');

    lblJogador.innerText = 'Jogador 1';
    lblJogadas.innerText = '(1ª Jogada)';

}

function clickdoce(doceSelecionado) {
    let jogadorSelecionado = null;

    if (doceSelecionado == 'ferrero') {
        jogadorSelecionado = ferrero;
    } else if (doceSelecionado == 'churros') {
        jogadorSelecionado = churros;
    } else if (doceSelecionado == 'casadinho') {
        jogadorSelecionado = casadinho;
    } else if (doceSelecionado == 'brig') {
        jogadorSelecionado = brig;
    } else if (doceSelecionado == 'bjo') {
        jogadorSelecionado = bjo;
    } else if (doceSelecionado == 'bichodepe') {
        jogadorSelecionado = bichodepe;
    }

    if (jogadorSelecionado == null) {
        alert('Erro ao selecionar o personagem');
        return;
    }

    let lblOrdemPersonagem = document.getElementById('ordemPersonagem');
    if (jogador1 == null) {
        jogador1 = jogadorSelecionado;
        lblOrdemPersonagem.innerText = '2º'
    } else {
        jogador2 = jogadorSelecionado;
        sectionPersonagens.style.display = 'none'
        sectionTabuleiro.style.display = 'block';
    }
}
