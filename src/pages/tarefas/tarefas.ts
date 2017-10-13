import { Component, Pipe, PipeTransform } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { TarefasServiceProvider } from '../../providers/tarefas-service/tarefas-service';
import { ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service';
import { TarefaPage } from '../../pages/tarefa/tarefa';

@IonicPage()
@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html',
})
export class TarefasPage {

  tarefas: any[];
  projetos: any[];
  filtroTarefas = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCrtl: MenuController, 
    public tarefasService: TarefasServiceProvider, public projService: ProjetosServiceProvider) {
    this.tarefas = tarefasService.getTarefas();
    this.projetos = projService.getProjetos();
  }

  nomeProjeto(c):string {
    for(let i = 0; i < this.projetos.length; i++){
      if(this.projetos[i].cod == c)
      return this.projetos[i].nome;
    }
  }
    selecionaTarefa(codTarefa) {
      let c = parseInt(codTarefa);
      this.navCtrl.push(TarefaPage, {codigo: c, novo: false});
  
    }

    novaTarefa() {
      this.navCtrl.push(TarefaPage, {codigo: 0, novo: true});
    }

    limpaFiltros() {
        this.filtroTarefas = {};
        this.menuCrtl.close();
    }

    filtroProjeto(c){
      this.filtroTarefas = { codProj: c};
      this.menuCrtl.close();
    }

    filtroDias(d){
      this.filtroTarefas = { dias: d};
      this.menuCrtl.close();
    }
  

}

@Pipe({name: 'filtro'})
export class Filtro implements PipeTransform {
  transform(itens: any[], filtro: any):any{
  itens.sort((a, b) =>  a.data-b.data);

    if(filtro.codProj >= 0) {
      return itens.filter(i => i.codProj == filtro.codProj)
    }
    else if(filtro.dias >= 0) {
      let d = new Date(new Date().getTime() + filtro.dias*24*60*60*1000);
      return itens.filter(i => i.data <= d );
    }

    return itens;
  }
}
