export class ListaNegociacoes {

  constructor() {
    this._negociacoes = [];
    this._colunaOrdena = 'data';
    this._colunaDesc = false;
  }

  get negociacoes() {
    return [].concat(this._negociacoes);
  }

  get volumeTotal() {
    return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
  }

  get colunaOrdena() {
    return this._colunaOrdena;
  }

  get colunaDesc() {
    return this._colunaDesc;
  }

  adiciona(negociacao) {

    this._negociacoes.push(negociacao);

    this.ordena();
  }

  esvazia() {
    this._negociacoes = [];
  }

  ordena(coluna = null) {

    // reordena
    if (!coluna){
      this._negociacoes.sort((a, b) => a[this._colunaOrdena] - b[this._colunaOrdena]);
      if(this._colunaDesc){
        this._negociacoes.reverse();
      }
      return;
    }

    if(this._colunaOrdena == coluna) {
      this._colunaDesc = !this._colunaDesc;
      this._negociacoes.reverse();
    } else {
      this._colunaOrdena = coluna;
      this._colunaDesc = false;
      this._negociacoes.sort((a, b) => a[coluna] - b[coluna]);
    } 
     
  }

}