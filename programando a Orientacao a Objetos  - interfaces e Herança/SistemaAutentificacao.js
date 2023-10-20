/*
Ser autenticavel significa ter o método autenticar

duck type
*/

export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if(SistemaAutenticacao.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  static ehAutenticavel(autenticavel) {
    return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function   //operador "in" verifica se essa chave (autenticar) [chave seria o metodo] existe dentro desse objeto (autenticavel)
  }
}