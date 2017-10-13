import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { GruposServiceProvider } from '../../providers/grupos-service/grupos-service';
import { ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service';
import { PessoasServiceProvider } from '../../providers/pessoas-service/pessoas-service';
import { ModalPage } from '../modal/modal';

@IonicPage()
@Component({
  selector: 'page-grupo',
  templateUrl: 'grupo.html',
})
export class GrupoPage {

  cod: number;
  nome: string;
  codProj: number;
  equipe: any[];

  novo: boolean;
  projetos: any[];
  pessoas: any[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public grpService: GruposServiceProvider,
  public projService: ProjetosServiceProvider, public pessoasService: PessoasServiceProvider, public modalCtrl: ModalController) {
    this.cod = this.navParams.get('codigo');
    this.novo = this.navParams.get('novo');
    this.codProj = this.navParams.get('codProj');
    this.nome = this.navParams.get('nome');

    let grupos = grpService.getGrupos();
    this.projetos = projService.getProjetos();
    this.pessoas = pessoasService.getPessoas();

    if(!this.novo) {
      for(let i = 0; i < grupos.length; i++) {
        if(grupos[i].cod == this.cod) {
          this.nome = grupos[i].nome;
          this.codProj = grupos[i].codProj;
          this.equipe = grupos[i].equipe;
          break;
        }
      }
    }
else {
  this.equipe = [];
}
  }

addGrp () {
  this.grpService.addGrupo( this.nome, this.codProj, this.equipe);
  this.navCtrl.pop();
}

alteraGrp () {
  this.grpService.editGrupo(this.cod, this.nome, this.codProj, this.equipe);
  this.navCtrl.pop();
}

deletaGrp() {
  this.grpService.deleteGrupo(this.cod);
  this.navCtrl.pop();
}

abrirModal() {
  let nomeProjeto = null;
   for (let i = 0; i < this.projetos.length; i++) {
    if(this.projetos[i].cod == this.codProj) {
      nomeProjeto = this.projetos[i].nome;
      break;
    }
  }
  let modal = this.modalCtrl.create(ModalPage, {nomeProjeto: nomeProjeto, equipe: this.equipe, pessoas: this.pessoas});
  modal.onDidDismiss(data => { this.equipe = data; });
  modal.present();

} 

}
