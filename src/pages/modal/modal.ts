import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


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