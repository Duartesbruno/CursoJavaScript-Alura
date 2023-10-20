console.log("meu primeiro programa - trabalhando com variáveis");
const idade = 26;
console.log("idade: ", idade);

const idadeSoma2 = idade + 2;
console.log(idadeSoma2);

const numero1 = "1";
console.log("String transfomada em numero:", +numero1);

console.log(10 + 5 * 2);
console.log(`----------------------`)
console.log("Conversão de Tipos");
console.log("2" + "2");
console.log(parseInt("2") + parseInt("2"));
console.log("10" / "2");
console.log("Bruno" / "2")  //NaN    (Not a Number)
//.toFixed(2)     para colocar somente 2 casas depois da virgula

console.log(`----------------------`)
console.log("Trabalhando com atribuição de variáveis");
const primeiroNome = "Bruno";
const sobrenome = "Duarte"
console.log(`Meu nome é: ${primeiroNome} ${sobrenome}`);
//ou
const nomeCompleto = `${primeiroNome} ${sobrenome}`;
console.log(nomeCompleto);

console.log(`----------------------`)
console.log(`Trabalhando com listas`)
const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
)
console.log("Destinos possivel:")
console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`) //adicionando elemento na lista
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);   //excluir item da lista.  Primeiro vai o numero da posição do item, segundo numero é ponto de parada.
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[2])


console.log(`----------------------`)
listaDeDestinos.push(`Porto Alegre`)
console.log("Condicionais")
console.log(listaDeDestinos);

// const idadeComprador = 17;  //21
// const estaAcompanhada = true;
// if (idadeComprador >= 18) {
//   console.log("Comprador maior de idade, posso vender!");
//   listaDeDestinos.splice(0, 1); //remove item
// } else if (estaAcompanhada) {
//   console.log("Comprador menor de Idade mas esta acompanhado, posso vender!");
//   listaDeDestinos.splice(0, 1); //remove item
// } else {
//   console.log("Não é maior de Idade e não esta acompanhado, não posso vender!")
// }

// const idadeComprador = 17;  //21
// const estaAcompanhada = true;
// let temPassagemComprada = false;
// const destino = "Salvador";

// if (idadeComprador >= 18 || estaAcompanhada) {
//   console.log("\nComprador maior de idade ou esta acompanhado. Posso vender!");
//   listaDeDestinos.splice(0, 1); //remove item
//   temPassagemComprada = true;
// } else {
//   console.log("\nNão é maior de Idade e não esta acompanhado. Não posso vender!")
//   temPassagemComprada = false;
// }

// console.log("\nEmbarque:");
// if(idadeComprador >= 18 && temPassagemComprada) {
//   console.log("Esta liberado, Boa viagem!!!");
// } else {
//     console.log("Você não pode embarcar!!!");
// }



const idadeComprador = 17;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

const podeComprar = idadeComprador >= 18 || estaAcompanhada;
let contador = 0;
let destinoExiste = false;
const posicoesDaArray = listaDeDestinos.length -1;
console.log(posicoesDaArray);

for (let cont = 0; cont < posicoesDaArray; cont++ ) {
  if(listaDeDestinos[contador] == destino) {
    destinoExiste = true;
  }else {
    console.log("Destino não existe");
    destinoExiste = false;
  }
  contador += 1;
}

//outra maneira
// while (contador < 3) {
//   if(listaDeDestinos[contador] == destino) {
//     destinoExiste = true;
//     break;
//   }else {
//     console.log("Destino não existe");
//     destinoExiste = false;
//   }
//   contador += 1;
// }

console.log(`Destino existe: ${destinoExiste}`);

if(podeComprar && destinoExiste) {
  console.log("Boa viagem!");
}else {
  console.log("Desculpe tivemos um erro!");
}


console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18); 