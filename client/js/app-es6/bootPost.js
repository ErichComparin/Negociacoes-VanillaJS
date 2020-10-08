import {HttpService} from './services/HttpService';

document.querySelector('#formEnviaServidor').onsubmit = function(event) {

    event.preventDefault();
    console.log("Enviando post");

    const $ = document.querySelector.bind(document);
    const inputData = $("#data");
    const inputQuantidade = $("#quantidade");
    const inputValor = $("#valor");

    const negociacao = {
      data: inputData.value,
      quantidade: inputQuantidade.value,
      valor: inputValor.value
    }

    new HttpService()
      .post('/negociacoes', negociacao)
      .then(() =>{
        inputData.value = '';
        inputQuantidade.value = 1;
        inputValor.value = 0.0;
        inputData.focus();
        alert("Negociação enviada com sucesso!");
      })
      .catch(erro => alert(`Não foi possível enviar a negociação: ${erro}`));
}