'use strict';

System.register(['./services/HttpService'], function (_export, _context) {
    "use strict";

    var HttpService;
    return {
        setters: [function (_servicesHttpService) {
            HttpService = _servicesHttpService.HttpService;
        }],
        execute: function () {

            document.querySelector('#formEnviaServidor').onsubmit = function (event) {

                event.preventDefault();
                console.log("Enviando post");

                var $ = document.querySelector.bind(document);
                var inputData = $("#data");
                var inputQuantidade = $("#quantidade");
                var inputValor = $("#valor");

                var negociacao = {
                    data: inputData.value,
                    quantidade: inputQuantidade.value,
                    valor: inputValor.value
                };

                new HttpService().post('/negociacoes', negociacao).then(function () {
                    inputData.value = '';
                    inputQuantidade.value = 1;
                    inputValor.value = 0.0;
                    inputData.focus();
                    alert("Negociação enviada com sucesso!");
                }).catch(function (erro) {
                    return alert('N\xE3o foi poss\xEDvel enviar a negocia\xE7\xE3o: ' + erro);
                });
            };
        }
    };
});
//# sourceMappingURL=bootPost.js.map