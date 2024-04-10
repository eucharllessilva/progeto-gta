/*

Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixas com os botões de seleção de plataforma
    Passo 1 - pegar o botão de seleção de plataformas no JS pra poder derificar quando o usuário clicar em cima dele

    Passo 2 - pegar o elemento do conteúdo que precisa ser mostrado

    Passo 3 - pegar o clique do usuário no JS

    Passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteúdo apareça 

Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido

    Passo1 - verifcar se o botão já está aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente

*/

//Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixas com os botões de seleção de plataforma

// Passo 1 - pegar o botão de seleção de plataformas no JS pra poder derificar quando o usuário clicar em cima dele

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

// Passo 3 - pegar o clique do usuário no JS
botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});