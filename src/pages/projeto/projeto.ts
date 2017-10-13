import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service';

/**
 * Generated class for the ProjetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projeto',
  templateUrl: 'projeto.html',
})
export class ProjetoPage {

  cod: number;
  nome: string;
  novo: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public projService: ProjetosServiceProvider) {
     this.cod = navParams.get('codigo');
     this.novo = navParams.get('novo');
     let projetos = projService.getProjetos();

     if(!this.novo) {
      for(let i = 0; i < projetos.length; i++) {
        if(projetos[i].cod == this.cod) {
          this.nome = projetos[i].nome;
          break;
        }
      }
    }
  }

  addProj() {
    this.projService.addProjeto(this.nome);
    this.navCtrl.pop();
  }

  alteraProj() {
      this.projService.editProjeto(this.cod, this.nome);
      this.navCtrl.pop();
  }

  deletaProj() {
    this.projService.deleteProjeto(this.cod);
    this.navCtrl.pop();
  }


}
