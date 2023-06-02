const espadaDB = JSON.parse(localStorage.getItem('lista'));

const updateLocalStorage = () => {
    localStorage.setItem('lista', JSON.stringify(espadaDB));
}

/* Carrega a primeira espada da lista ao entrar na página */

let indiceEspadaAtual = 0;

window.addEventListener("load", () => updateEspada());

    function updateEspada(){

    const espadaInicial = espadaDB.espadas[indiceEspadaAtual];

    document.querySelector('#espadaIMG').src = espadaInicial.imagem;
    document.querySelector('#espadaNOME').innerText = espadaInicial.nome;
    document.querySelector('#espadaATK').innerText = espadaInicial.ataque;
    document.querySelector('#espadaDEF').innerText = espadaInicial.defesa;
    document.querySelector('#espadaLVL').innerText = espadaInicial.level;
    document.querySelector('#espadaPESO').innerText = espadaInicial.peso;

    return espadaInicial;
}


/* Exibe a próxima espada da lista ao clicar no botão */
function exibirProximaEspada() {
    
    if (indiceEspadaAtual < espadaDB.espadas.length -1) {
        indiceEspadaAtual++;
    } else if (indiceEspadaAtual == espadaDB.espadas.length -1){
        indiceEspadaAtual = 0;
    }
    updateEspada();
  }
 

/* Exibe a espada anterior da lista ao clicar no botão */  
function exibirEspadaAnterior() {
    if (indiceEspadaAtual > 0) {
        indiceEspadaAtual--;
    } else if (indiceEspadaAtual == 0){
        indiceEspadaAtual = espadaDB.espadas.length -1;
    }
    updateEspada();
}

const addEspadaNome = document.querySelector('#nome');
const addEspadaAtaque = document.querySelector('#ataque');
const addEspadaDefesa = document.querySelector('#defesa');
const addEspadaLevel = document.querySelector('#level');
const addEspadaPeso = document.querySelector('#peso');

const resetEspada = () => {
    addEspadaNome.value = '';
    addEspadaAtaque.value = '';
    addEspadaDefesa.value = '';
    addEspadaLevel.value = '';
    addEspadaPeso.value = '';
    limparPreview()
}

const excluirEspada = () => {
    espadaDB.espadas.splice(indiceEspadaAtual, 1);
    updateLocalStorage();
    exibirProximaEspada();
}

const editarEspada = () => {
    resetEspada();
    const espadaImgPrev = document.querySelector('#espadaImgPrev');
    espadaImgPrev.src = espadaDB.espadas[indiceEspadaAtual].imagem;
    addEspadaNome.value = espadaDB.espadas[indiceEspadaAtual].nome;
    addEspadaAtaque.value = espadaDB.espadas[indiceEspadaAtual].ataque;
    addEspadaDefesa.value = espadaDB.espadas[indiceEspadaAtual].defesa;
    addEspadaLevel.value = espadaDB.espadas[indiceEspadaAtual].level;
    addEspadaPeso.value = espadaDB.espadas[indiceEspadaAtual].peso;
}

const salvarEdicao = () => {
    espadaDB.espadas[indiceEspadaAtual].nome = addEspadaNome.value;
    espadaDB.espadas[indiceEspadaAtual].ataque = addEspadaAtaque.value;
    espadaDB.espadas[indiceEspadaAtual].defesa = addEspadaDefesa.value;
    espadaDB.espadas[indiceEspadaAtual].level = addEspadaLevel.value;
    espadaDB.espadas[indiceEspadaAtual].peso = addEspadaPeso.value;
    espadaDB.espadas[indiceEspadaAtual].imagem = espadaImgPrev.src;
    updateLocalStorage();
    exibirProximaEspada();
    resetEspada();
}

function previewImage(event) {
    const fileInput = event.target;
    const imgPreview = document.querySelector('#espadaImgPrev');
    
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      
      reader.onload = function (e) {
        imgPreview.src = e.target.result;
      }
      
      reader.readAsDataURL(fileInput.files[0]);
    }
  }

function limparPreview() {
    const espadaImgPrev = document.querySelector('#espadaImgPrev');
    espadaImgPrev.src = './imagens/Dagger.gif';
}

const insertEspada = () => {
    const nome = addEspadaNome.value;
    const ataque = addEspadaAtaque.value;
    const defesa = addEspadaDefesa.value;
    const level = addEspadaLevel.value;
    const peso = addEspadaPeso.value;
    const imagem = document.querySelector('#espadaImgPrev').src;

    if (nome == '' || ataque == '' || defesa == '' || level == '' || peso == '' || imagem.src == '') {
            alert('Preencha todos os campos!');
        } else{
            const novoEspada = {
                id: espadaDB.espadas.length + 1,
                imagem: imagem,
                nome: nome,
                ataque: ataque,
                defesa: defesa,
                level: level,
                peso: peso
            }
            espadaDB.espadas.push(novoEspada);
            updateEspada();
            resetEspada();
            limparPreview();
        }
}
