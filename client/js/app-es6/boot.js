import {currentInstance} from './controllers/NegociacaoController';
let negociacaoController = currentInstance();

document.querySelector('#formAdiciona').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
document.querySelector('#btnImporta').onclick = negociacaoController.importaNegociacoes.bind(negociacaoController);
document.querySelector('#btnApaga').onclick = negociacaoController.apaga.bind(negociacaoController);