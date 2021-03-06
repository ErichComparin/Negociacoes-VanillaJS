'use strict';

System.register(['../models/Mensagem', '../models/Negociacao', '../models/ListaNegociacoes', '../views/NegociacoesView', '../views/MensagemView', '../services/NegociacaoService', '../helpers/DateHelper', '../helpers/Bind'], function (_export, _context) {
  "use strict";

  var Mensagem, Negociacao, ListaNegociacoes, NegociacoesView, MensagemView, NegociacaoService, DateHelper, Bind, _createClass, NegociacaoController, negociacaoController;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_modelsMensagem) {
      Mensagem = _modelsMensagem.Mensagem;
    }, function (_modelsNegociacao) {
      Negociacao = _modelsNegociacao.Negociacao;
    }, function (_modelsListaNegociacoes) {
      ListaNegociacoes = _modelsListaNegociacoes.ListaNegociacoes;
    }, function (_viewsNegociacoesView) {
      NegociacoesView = _viewsNegociacoesView.NegociacoesView;
    }, function (_viewsMensagemView) {
      MensagemView = _viewsMensagemView.MensagemView;
    }, function (_servicesNegociacaoService) {
      NegociacaoService = _servicesNegociacaoService.NegociacaoService;
    }, function (_helpersDateHelper) {
      DateHelper = _helpersDateHelper.DateHelper;
    }, function (_helpersBind) {
      Bind = _helpersBind.Bind;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      NegociacaoController = function () {
        function NegociacaoController() {
          _classCallCheck(this, NegociacaoController);

          var $ = document.querySelector.bind(document);

          this._inputData = $('#data');
          this._inputQuantidade = $('#quantidade');
          this._inputValor = $('#valor');
          this._service = new NegociacaoService();

          this._listaNegociacoes = new Bind(new ListaNegociacoes(), new NegociacoesView($('#negociacoesView')), 'adiciona', 'esvazia', 'ordena', 'inverteOrdem');

          this._mensagem = new Bind(new Mensagem(), new MensagemView($('#mensagemView')), 'exibe');

          this._init();
        }

        _createClass(NegociacaoController, [{
          key: '_init',
          value: function _init() {
            var _this = this;

            this._service.lista().then(function (negociacoes) {
              return negociacoes.forEach(function (negociacao) {
                return _this._listaNegociacoes.adiciona(negociacao);
              });
            }).catch(function (erro) {
              console.log(erro);
              _this._mensagem.exibe('danger', erro);
            });

            setInterval(function () {
              _this.importaNegociacoes();
            }, 5000);
          }
        }, {
          key: 'adiciona',
          value: function adiciona(event) {
            var _this2 = this;

            event.preventDefault();

            var negociacao = this._criaNegociacao();

            this._service.cadastra(negociacao).then(function (mensagem) {
              _this2._listaNegociacoes.adiciona(negociacao);
              _this2._mensagem.exibe('success', mensagem);
              _this2._limpaFormulario();
            }).catch(function (erro) {
              return _this2._mensagem.exibe('danger', erro);
            });
          }
        }, {
          key: 'apaga',
          value: function apaga() {
            var _this3 = this;

            this._service.apaga().then(function (mensagem) {
              _this3._mensagem.exibe('success', mensagem);
              _this3._listaNegociacoes.esvazia();
            }).catch(function (erro) {
              return _this3._mensagem.exibe('warning', erro);
            });
          }
        }, {
          key: '_criaNegociacao',
          value: function _criaNegociacao() {

            return new Negociacao(DateHelper.textoParaData(this._inputData.value), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
          }
        }, {
          key: '_limpaFormulario',
          value: function _limpaFormulario() {

            this._inputData.value = '';
            this._inputQuantidade.value = 1;
            this._inputValor.value = 0.0;
            this._inputData.focus();
          }
        }, {
          key: 'importaNegociacoes',
          value: function importaNegociacoes() {
            var _this4 = this;

            this._service.importa(this._listaNegociacoes.negociacoes).then(function (negociacoes) {
              return negociacoes.forEach(function (negociacao) {
                _this4._listaNegociacoes.adiciona(negociacao);
                _this4._mensagem.exibe('success', 'Negociações do período importadas');
              });
            }).catch(function (erro) {
              return _this4._mensagem.exibe('danger', erro);
            });
          }
        }, {
          key: 'ordena',
          value: function ordena(coluna) {

            this._listaNegociacoes.ordena(coluna);
          }
        }]);

        return NegociacaoController;
      }();

      negociacaoController = new NegociacaoController();
      function currentInstance() {
        return negociacaoController;
      }

      _export('currentInstance', currentInstance);
    }
  };
});
//# sourceMappingURL=NegociacaoController.js.map