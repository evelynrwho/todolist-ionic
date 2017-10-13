import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjetosServiceProvider {

  projetos = [
    {cod: 1, nome: 'Algoritmos'}, 
    {cod: 2, nome: 'Pós-graduação'},
    {cod: 3, nome: 'EAD'}
  ];

  ultimoCod = 3;

  constructor(public http: Http) {
  }

  getProjetos() {
    return this.projetos;
  }

  addProjeto(nome: string) {
    this.ultimoCod++;
    this.projetos.push({cod: this.ultimoCod, nome: nome});
  }

  editProjeto(cod: number, nome: string) {
    for (let i = 0; i < this.projetos.length; i++) {
      if(this.projetos[i].cod == cod) {
        this.projetos[i].nome = nome;
        break;
      }
    }
  }

  deleteProjeto(cod: number) {
    for (let i = 0; i < this.projetos.length; i++) {
      if(this.projetos[i].cod == cod) {
        this.projetos.splice(i, 1);
        break;
      }
    }
  }
}
