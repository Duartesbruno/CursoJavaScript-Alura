import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutentificacao.js";
// import { ContaCorrente } from "./Conta/ContaCorrente.js";
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
// import { Conta } from "./Conta.js";
// import { ContaSalario } from "./Conta/ContaSalario.js";

// //"new" esta criando uma instancia da classe Cliente
// const cliente1 = new Cliente("Ricardo", 11122233355);
// //cada cliente é um objeto

// const cliente2 = new Cliente("Alice", 33388833355);


// const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);

// const conta2 = new ContaCorrente(1002, cliente2);


// console.log(contaCorrenteRicardo._saldo);
// const valorDepositado = contaCorrenteRicardo.depositar(100);
// console.log(valorDepositado);
// const valorSacado = contaCorrenteRicardo.sacar(50)
// console.log(valorSacado);
// contaCorrenteRicardo.depositar(500);
// contaCorrenteRicardo.transferir(200, conta2);
// contaCorrenteRicardo.depositar(-1); testando validação de numero negativo

// console.log(contaCorrenteRicardo._saldo);


// console.log(contaCorrenteRicardo);
// console.log(conta2);

// console.log(cliente1);
// console.log(cliente2);

// console.log(conta2.cliente);
// console.log(conta2.saldo);

// console.log(ContaCorrente.numeroDeContas);

// const cliente1 = new Cliente("Ricardo", 11122233309);

// const contaCorrenteRicardo = new ContaCorrente(0,  cliente1, 1001);
// contaCorrenteRicardo.depositar(500);
// contaCorrenteRicardo.sacar(100);


// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// contaPoupanca.sacar(10);

// console.log(contaPoupanca);
// console.log(contaCorrenteRicardo);

// const conta = new Conta(30, cliente1, 1001);
// console.log(conta);

// const contaSalario = new ContaSalario(cliente1);
// contaSalario.depositar(100);
// contaSalario.sacar(10);
// console.log(contaSalario);


const diretor = new Diretor("Bruno", 2500, 123456789);
diretor.cadastrarSenha("12345");

const gerente = new Gerente("Ricardo", 1500, 987654321);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lucas", 8578485687, "785");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "12345");
console.log(diretorEstaLogado);

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
console.log(gerenteEstaLogado);

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");
console.log(clienteEstaLogado);


