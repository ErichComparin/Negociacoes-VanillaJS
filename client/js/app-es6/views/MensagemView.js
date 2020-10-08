import {View} from './View';

export class MensagemView extends View {

  constructor(elemento) {
    super(elemento);
  }

  template(model) {

    if (!model.texto){
      return '<p></p>';
    }

    const id = 'alert' + new Date().getUTCMilliseconds();

    setTimeout(() => {
      const alert = document.querySelector('#' + id);

      // verifica se existe
      if (alert) { 
        document.getElementById(id).style.display = "none";
      }
    }, 5000);

    return `<p id="${id}" class="alert alert-${model.tipo}">${model.texto}</p>`;
  }
}