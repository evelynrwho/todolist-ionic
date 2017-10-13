import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GruposServiceProvider } from '../../providers/grupos-service/grupos-service';
import { GrupoPage } from '../grupo/grupo';
import { ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service';

@IonicPage()
@Component({
  selector: 'page-grupos',
  templateUrl: 'grupos.html',
})
export class GruposPage {

  grupos: any[];
  projetos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public grpService: GruposServiceProvider,
  public projService: ProjetosServiceProvider) {
     this.grupos = grpService.getGrupos(); 
     this.projetos = projService.getProjetos();
  }

  selecionaGrp (c) {
    let cod = parseInt(c);
    this.navCtrl.push(GrupoPage, {codigo: cod, novo: false});
  }

  novoGrp () {
    this.navCtrl.push(GrupoPage, {codigo: 0, novo: true});
  }

  buscaProjeto (codProj) {
      for(let i = 0; i < this.projetos.length; i++) {
        if(this.projetos[i].cod == codProj)
          return this.projetos[i].nome;
      }
  }

}
