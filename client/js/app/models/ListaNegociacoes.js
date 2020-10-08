'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var _createClass, ListaNegociacoes;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
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

      _export('ListaNegociacoes', ListaNegociacoes = function () {
        function ListaNegociacoes() {
          _classCallCheck(this, ListaNegociacoes);

          this._negociacoes = [];
          this._colunaOrdena = 'data';
          this._colunaDesc = false;
        }

        _createClass(ListaNegociacoes, [{
          key: 'adiciona',
          value: function adiciona(negociacao) {

            this._negociacoes.push(negociacao);

            this.ordena();
          }
        }, {
          key: 'esvazia',
          value: function esvazia() {
            this._negociacoes = [];
          }
        }, {
          key: 'ordena',
          value: function ordena() {
            var _this = this;

            var coluna = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


            // reordena
            if (!coluna) {
              this._negociacoes.sort(function (a, b) {
                return a[_this._colunaOrdena] - b[_this._colunaOrdena];
              });
              if (this._colunaDesc) {
                this._negociacoes.reverse();
              }
              return;
            }

            if (this._colunaOrdena == coluna) {
              this._colunaDesc = !this._colunaDesc;
              this._negociacoes.reverse();
            } else {
              this._colunaOrdena = coluna;
              this._colunaDesc = false;
              this._negociacoes.sort(function (a, b) {
                return a[coluna] - b[coluna];
              });
            }
          }
        }, {
          key: 'negociacoes',
          get: function get() {
            return [].concat(this._negociacoes);
          }
        }, {
          key: 'volumeTotal',
          get: function get() {
            return this._negociacoes.reduce(function (total, n) {
              return total + n.volume;
            }, 0.0);
          }
        }, {
          key: 'colunaOrdena',
          get: function get() {
            return this._colunaOrdena;
          }
        }, {
          key: 'colunaDesc',
          get: function get() {
            return this._colunaDesc;
          }
        }]);

        return ListaNegociacoes;
      }());

      _export('ListaNegociacoes', ListaNegociacoes);
    }
  };
});
//# sourceMappingURL=ListaNegociacoes.js.map