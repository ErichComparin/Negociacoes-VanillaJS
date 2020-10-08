'use strict';

System.register(['../helpers/DateHelper', './View', '../controllers/NegociacaoController'], function (_export, _context) {
  "use strict";

  var DateHelper, View, currentInstance, _createClass, NegociacoesView;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_helpersDateHelper) {
      DateHelper = _helpersDateHelper.DateHelper;
    }, function (_View2) {
      View = _View2.View;
    }, function (_controllersNegociacaoController) {
      currentInstance = _controllersNegociacaoController.currentInstance;
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

      _export('NegociacoesView', NegociacoesView = function (_View) {
        _inherits(NegociacoesView, _View);

        function NegociacoesView(elemento) {
          _classCallCheck(this, NegociacoesView);

          var _this = _possibleConstructorReturn(this, (NegociacoesView.__proto__ || Object.getPrototypeOf(NegociacoesView)).call(this, elemento));

          elemento.addEventListener('click', function (event) {

            if (event.target.nodeName == 'TH') {
              currentInstance().ordena(event.target.id);
            }
          });

          return _this;
        }

        _createClass(NegociacoesView, [{
          key: 'template',
          value: function template(model) {

            var cols = ['data', 'quantidade', 'valor', 'volume'];

            return '\n      <table class="table table-hover table-bordered">\n        <thead>\n          <tr>\n            <th id=' + cols[0] + '>' + this._retornaCabecalho(cols[0], model) + '</th>\n            <th id=' + cols[1] + '>' + this._retornaCabecalho(cols[1], model) + '</th>\n            <th id=' + cols[2] + '>' + this._retornaCabecalho(cols[2], model) + '</th>\n            <th id=' + cols[3] + '>' + this._retornaCabecalho(cols[3], model) + '</th>\n          </tr>\n        </thead>\n      \n        <tbody>\n          ' + model.negociacoes.map(function (n) {
              return '\n            \n            <tr>\n              <td>' + DateHelper.dataParaTexto(n.data) + '</td>\n              <td>' + n.quantidade + '</td>\n              <td>' + n.valor + '</td>\n              <td>' + n.volume + '</td>\n            </tr>\n            \n          ';
            }).join('') + '                \n        </tbody>\n              \n        <tfoot>\n          <td colspan="3"></td>\n          <td>\n            ' + model.volumeTotal + '\n          </td>\n        </tfoot>\n          \n      </table>\n      ';
          }
        }, {
          key: '_retornaCabecalho',
          value: function _retornaCabecalho(coluna, model) {
            return coluna.toUpperCase() + ' ' + (model.colunaOrdena == coluna ? model.colunaDesc ? '&or;' : '&and;' : '');
          }
        }]);

        return NegociacoesView;
      }(View));

      _export('NegociacoesView', NegociacoesView);
    }
  };
});
//# sourceMappingURL=NegociacoesView.js.map