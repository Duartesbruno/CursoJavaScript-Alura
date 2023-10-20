//classe abstrata  (só funciona para ser herdada)
export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;

    if(this.constructor == Conta) {
      throw new Error("Você não deveria instaciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata");
    }
  }

  set cliente(novoValor){
    if(novoValor instanceof Cliente)
    this._cliente = novoValor;
  }

  get cliente() {
    return this._cliente;
  }
  
  get saldo() {
    return this._saldo;
  }

  //Método abstrato (feito para ser sobreescrito)
  sacar(valor) {
    throw new Error("O método Sacar da conta é abstrato");
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if(this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  }

  depositar(valor){
    if(valor > 0) {
      this._saldo += valor;
      return valor;
    }
  };

  transferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}


//#saldo          é usado para dizer que o atributo é privado, mas ainda nao esta sendo muito usado pela comunidade o usual é _  [link da proposta: https://github.com/tc39/proposal-class-fields#private-fields]

// outra forma  "early return" :  (ou "retorno antecipado", em tradução livre). Essa técnica consiste em verificarmos todas as situações indesejadas primeiro. Por exemplo, no método depositar() não queremos que o valor recebido seja menor ou igual a zero. Caso isso aconteça, simplesmente usaremos a instrução return para pararmos a execução do código.
// depositar(valor){ 
//   if(valor > 0) {
//     return;
//   }
//   this._saldo += valor;
// };