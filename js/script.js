function changeMode(){
    //console.log('Cliquei');

    changeClasses();
    changeText();

}

function changeClasses(){
    button.classList.toggle(modoEscuroClasse);
    h1.classList.toggle(modoEscuroClasse);
    body.classList.toggle(modoEscuroClasse);
    footer.classList.toggle(modoEscuroClasse);
}
function changeText(){
    const modoclaro = "Modo Claro";
    const modoescuro = "Modo Escuro";

    if (body.classList.contains(modoEscuroClasse)){
        button.innerHTML = modoclaro;
        h1.innerHTML = modoescuro + " LIGADO";
        return;
    }

    button.innerHTML = modoescuro;
    h1.innerHTML = modoclaro + " LIGADO";
}

const modoEscuroClasse = 'modo-escuro';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]; //é um array e neste Array ele carrega uma coleção body // O elemento 0 é para retornar apenas um elemento da lista
const footer = document.getElementsByTagName('footer')[0]; 

console.log(body);
//console.log(button);

button.addEventListener('click', changeMode);