import { Component, Pipe, PipeTransform } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CheckBoxList } from 'ng2-checkboxlist/checkboxlist.js';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})

export class ModalPage {

  pessoas: any[];
  equipe: any[];
  nomeProjeto: string;
  checkedItems:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.nomeProjeto = this.navParams.get('nomeProjeto');
    this.equipe = this.navParams.get('equipe');
    this.pessoas = this.navParams.get('pessoas');

     this.pessoas.forEach(function(p){
      p.checked = this.equipe.some(s => s == p.cod);
    }.bind(this));
  }

  closeModal ()  {
    this.viewCtrl.dismiss(this.equipe);
  }

  salvar() {
    this.equipe = [];
    this.pessoas.forEach(function(p) {
      if(p.checked)
        this.equipe.push(p.cod);
    }.bind(this));

    this.viewCtrl.dismiss(this.equipe);
  }

  alteraSelecao(p) {
    p.checked = !p.checked;
  }



}
@Pipe({name: 'filtro'})
export class FiltroModal implements PipeTransform {


  transform(itens: any[], filtro: any[]):any{
    var filtered = [];
    console.log(filtered);
  itens.sort((a, b) =>  a.nome-b.nome);
    if(filtro.length > 0) {
      itens.forEach(function(e) {
        if(filtro.some(s => s == e.cod)) {
            filtered.push(e);
        }
    });
      console.log(filtered);
      return filtered;
    }
    
    return itens;
  }
}