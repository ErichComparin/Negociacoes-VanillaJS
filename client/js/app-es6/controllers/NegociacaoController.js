import {Mensagem} from '../models/Mensagem';
import {Negociacao} from '../models/Negociacao';
import {ListaNegociacoes} from '../models/ListaNegociacoes';
import {NegociacoesView} from '../views/NegociacoesView';
import {MensagemView} from '../views/MensagemView';
import {NegociacaoService} from '../services/NegociacaoService';
import {DateHelper} from '../helpers/DateHelper';
import {Bind} from '../helpers/Bind';

class NegociacaoController {

  constructor() {

    let $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._service = new NegociacaoService();

    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($('#negociacoesView')),
      'adiciona', 'esvazia', 'ordena', 'inverteOrdem');

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($('#mensagemView')),
      'exibe');

      this._init();
  }

  _init() {

    this._service
      .lista()
      .then(negociacoes =>
        negociacoes.forEach(negociacao =>
          this._listaNegociacoes.adiciona(negociacao)))
      .catch(erro => {
        console.log(erro);
        this._mensagem.exibe('danger', erro);
      })

    setInterval(() => {
      this.importaNegociacoes();
    }, 5000);
  }

  adiciona(event) {

    event.preventDefault();

    let negociacao = this._criaNegociacao();

    this._service
      .cadastra(negociacao)
      .then(mensagem => {
        this._listaNegociacoes.adiciona(negociacao);
        this._mensagem.exibe('success', mensagem);
        this._limpaFormulario();
      })
      .catch(erro => this._mensagem.exibe('danger', erro));

  }

  apaga() {

    this._service
      .apaga()
      .then(mensagem => {
        this._mensagem.exibe('success', mensagem);
        this._listaNegociacoes.esvazia();
      })
      .catch(erro => this._mensagem.exibe('warning', erro));
    
  }

  _criaNegociacao() {

    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value));
  }

  _limpaFormulario() {

    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }

  importaNegociacoes() {

    this._service
      .importa(this._listaNegociacoes.negociacoes)
      .then(negociacoes => negociacoes.forEach(negociacao => {
          this._listaNegociacoes.adiciona(negociacao);
          this._mensagem.exibe('success', 'Negociações do período importadas');
      }))
      .catch(erro => this._mensagem.exibe('danger', erro));
  }

  ordena(coluna) {

    this._listaNegociacoes.ordena(coluna);
  }

}


let negociacaoController = new NegociacaoController();

export function currentInstance() {
    return negociacaoController;
}