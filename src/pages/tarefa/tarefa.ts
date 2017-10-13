import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TarefasServiceProvider} from '../../providers/tarefas-service/tarefas-service';
import { ProjetosServiceProvider} from '../../providers/projetos-service/projetos-service';

@IonicPage()
@Component({
  selector: 'page-tarefa',
  templateUrl: 'tarefa.html',
})
export class TarefaPage {

  rootPage = null;
  
  codigo: number;
  desc: string;
  codProj: number;
  prioridade: number;
  data: string;

  novo: boolean;
  projetos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public tarefaService: TarefasServiceProvider, public projService: ProjetosServiceProvider) {
    let tarefas = tarefaService.getTarefas();
    this.projetos = projService.getProjetos();

    this.novo = navParams.get('novo');
    this.codigo = navParams.get('codigo');
    this.codProj = navParams.get('codProj');
    this.desc = navParams.get('desc');
    this.prioridade = navParams.get('prioridade');
    this.data = navParams.get('data');

    if(!this.novo) {
      for(let i = 0; i < tarefas.length; i++) {
        if(tarefas[i].cod == this.codigo) {
          this.desc = tarefas[i].desc;
          this.prioridade = tarefas[i].prioridade;
          let d = tarefas[i].data;
          this.data = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).substr(-2,2) + "-" + ("0" + d.getDate()).substr(-2,2);
          this.codProj = tarefas[i].codProj;
          break;
        }
      }
    }
    else {
      this.desc = '';
      this.prioridade = 3;
      let d = new Date();
      this.data = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).substr(-2,2) + "-" + ("0" + d.getDate()).substr(-2,2);
      this.codProj = this.projetos[0].cod;
    }
  }

addTarefa() {
  let d = new Date(parseInt(this.data.substr(0,4)), parseInt(this.data.substr(5,2))-1, parseInt(this.data.substr(8,2)));
  this.tarefaService.addTarefa(this.desc, this.prioridade, this.codProj, d);
  this.navCtrl.pop();
}

deletaTarefa () {
  this.tarefaService.deleteTarefa(this.codigo);
  this.navCtrl.pop();
}

alteraTarefa() {
  let d = new Date(parseInt(this.data.substr(0,4)), parseInt(this.data.substr(5,2))-1, parseInt(this.data.substr(8,2)));
  this.tarefaService.editTarefa(this.codigo, this.desc, this.prioridade, this.codProj, d);
  this.navCtrl.pop();
}

}
