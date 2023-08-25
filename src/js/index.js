const botaoAlterarTema = document.getElementById("botao-alterar-tema");


const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector (".imagen-botao")



botaoAlterarTema.addEventListener("click", ()=> {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
       
    if(modoEscuroEstaAtivo) {

    body.classList.remove("modo-escuro");

    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/dia.png");

    }else{

     body.classList.add("modo-escuro");


    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/noite.png");
    }

});