import { DateHelper } from '../helpers/DateHelper';
import { View } from './View';
import { currentInstance } from '../controllers/NegociacaoController';

export class NegociacoesView extends View {

  constructor(elemento) {
    super(elemento);

    elemento.addEventListener('click', function (event) {

      if (event.target.nodeName == 'TH') {
        currentInstance().ordena(event.target.id);
      }
    });

  }

  template(model) {

    const cols = ['data', 'quantidade', 'valor', 'volume'];

    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th id=${cols[0]}>${this._retornaCabecalho(cols[0], model)}</th>
            <th id=${cols[1]}>${this._retornaCabecalho(cols[1], model)}</th>
            <th id=${cols[2]}>${this._retornaCabecalho(cols[2], model)}</th>
            <th id=${cols[3]}>${this._retornaCabecalho(cols[3], model)}</th>
          </tr>
        </thead>
      
        <tbody>
          ${model.negociacoes.map(n => `
            
            <tr>
              <td>${DateHelper.dataParaTexto(n.data)}</td>
              <td>${n.quantidade}</td>
              <td>${n.valor}</td>
              <td>${n.volume}</td>
            </tr>
            
          `).join('')}                
        </tbody>
              
        <tfoot>
          <td colspan="3"></td>
          <td>
            ${model.volumeTotal}
          </td>
        </tfoot>
          
      </table>
      `;
  }

  _retornaCabecalho(coluna, model) {
    return `${coluna.toUpperCase()} ${model.colunaOrdena == coluna ? (model.colunaDesc ? '&or;' : '&and;') : ''}`;
  }

}