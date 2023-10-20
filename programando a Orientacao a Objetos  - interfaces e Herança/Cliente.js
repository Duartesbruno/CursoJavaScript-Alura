//Uma Classe é um Molde
export class Cliente {
  get cpf(){
    return this._cpf;
  } 

  constructor(nome, cpf, senha) {
    this.nome = nome;
    this._cpf = cpf;
    this._senha = senha;
  }

  autenticar() {
    return true;
  }
}


//todos metodos sao instacias de uma funcao (instanceof)