import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TarefasServiceProvider {

  tarefas = [
    {cod: 1, codProj: 1, desc: 'Elaborar primeira prova', data: new Date(2017, 9, 11), prioridade: 1}, 
    {cod: 2, codProj: 1, desc: 'Fechar diário', data: new Date(2017, 11, 10), prioridade: 2},
    {cod: 3, codProj: 2, desc: 'Gravar vídeo de apresentação', data: new Date(2017, 8, 1), prioridade: 1}, 
    {cod: 4, codProj: 3, desc: 'Planejar campanha', data: new Date(2017, 9, 29), prioridade: 3}
  ];
  ultimoCod = 4;
  constructor(public http: Http) {

  }

  getTarefas () {
    return this.tarefas;
  }

  addTarefa(desc: string, prioridade: number, codProj: number, data: Date) {
    this.ultimoCod++;
    this.tarefas.push({
      cod: this.ultimoCod, 
      codProj: codProj,
      data: data,
      desc: desc,
      prioridade: prioridade
    });
  }
  editTarefa(cod: number, desc: string, prioridade: number, codProj: number, data: Date) {
    for (let i = 0; i < this.tarefas.length; i++) {
      if(this.tarefas[i].cod == cod) {
        this.tarefas[i].codProj = codProj;
        this.tarefas[i].desc = desc;
        this.tarefas[i].prioridade = prioridade;
        this.tarefas[i].data = data;
        break;
      }
    }
  }
  deleteTarefa(cod: number) {
    for (let i = 0; i < this.tarefas.length; i++) {
      if(this.tarefas[i].cod == cod) {
        this.tarefas.splice(i , 1);
        break;
      }
  }
}

}
