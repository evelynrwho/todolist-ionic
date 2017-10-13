import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service';
import { ProjetoPage } from '../projeto/projeto';

@IonicPage()
@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html',
})
export class ProjetosPage {

  projetos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public projService: ProjetosServiceProvider) {
    this.projetos = projService.getProjetos();
  }

  novoProj() {
    this.navCtrl.push(ProjetoPage, {codigo: 0, novo: true});
  }

  selecionaProj(codProj) {
    let c = parseInt(codProj);
    this.navCtrl.push(ProjetoPage, {codigo: c, novo: false});

  }

}
