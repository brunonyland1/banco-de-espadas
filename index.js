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

function exibirProximaEspada() {
    
    if (indiceEspadaAtual < itens.espadas.length -1) {
        indiceEspadaAtual++;
    } else if (indiceEspadaAtual == itens.espadas.length -1){
        indiceEspadaAtual = 0;
    }
    updateEspada();
  }
  
function exibirEspadaAnterior() {
    if (indiceEspadaAtual > 0) {
        indiceEspadaAtual--;
    } else if (indiceEspadaAtual == 0){
        indiceEspadaAtual = itens.espadas.length -1;
    }
    updateEspada();
}


