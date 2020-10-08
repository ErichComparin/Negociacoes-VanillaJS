export class Mensagem {
    
    constructor(texto='', tipo='') {
        
        this._texto = texto;
        this._tipo = tipo; // success, warning, danger
    }
    
    get texto() {
        return this._texto;
    }
    
    get tipo() {
      return this._tipo;
  }

    exibe(tipo, texto) {

      this._tipo = tipo;
      this._texto = texto;
    }
}