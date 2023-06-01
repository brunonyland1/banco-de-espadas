/* Lista de Espadas */

const itens = {
    espadas: [
            {
            id: 1,
            imagem: "./imagens/Magic_Longsword.gif",
            nome: 'Magic Long Sword',
            ataque: '55',
            defesa: '0',
            level: 140,
            peso: 43.00 + 'oz'
            },
            {
            id: 2,
            imagem: "./imagens/Warlord_Sword.gif",
            nome: 'Warlord Sword',
            ataque: '53',
            defesa: '38',
            level: 120,
            peso: 64.00 + 'oz'
            },
            {
            id: 3,
            imagem: "./imagens/Slayer_of_Destruction.gif",
            nome: 'Slayer of Destruction',
            ataque: '52',
            defesa: '30',
            level: 200,
            peso: 70.00 + 'oz'
            },
    ]
};

/* Carrega a primeira espada da lista ao entrar na página */

let indiceEspadaAtual = 0;

window.addEventListener("load", () => updateEspada());

    function updateEspada(){

    const MagicLongSword = itens.espadas[indiceEspadaAtual];

    document.querySelector('#espadaIMG').src = MagicLongSword.imagem;
    document.querySelector('#espadaNOME').innerText = MagicLongSword.nome;
    document.querySelector('#espadaATK').innerText = MagicLongSword.ataque;
    document.querySelector('#espadaDEF').innerText = MagicLongSword.defesa;
    document.querySelector('#espadaLVL').innerText = MagicLongSword.level;
    document.querySelector('#espadaPESO').innerText = MagicLongSword.peso;
}


/* Exibe a próxima espada da lista ao clicar no botão */
function exibirProximaEspada() {
    
    if (indiceEspadaAtual < itens.espadas.length -1) {
        indiceEspadaAtual++;
    } else if (indiceEspadaAtual == itens.espadas.length -1){
        indiceEspadaAtual = 0;
    }
    updateEspada();
  }
 

/* Exibe a espada anterior da lista ao clicar no botão */  
function exibirEspadaAnterior() {
    if (indiceEspadaAtual > 0) {
        indiceEspadaAtual--;
    } else if (indiceEspadaAtual == 0){
        indiceEspadaAtual = itens.espadas.length -1;
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
    espadaImgPrev.parentNode.removeChild(espadaImgPrev);
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
                id: itens.espadas.length + 1,
                imagem: imagem,
                nome: nome,
                ataque: ataque,
                defesa: defesa,
                level: level,
                peso: peso
            }
            itens.espadas.push(novoEspada);
            updateEspada();
            resetEspada();
            limparPreview();
        }
}

