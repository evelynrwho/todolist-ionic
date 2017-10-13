import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GruposServiceProvider {

  grupos = [
    {cod: 1, nome: 'Grupo I', codProj: 1, equipe: [1, 2]},
    {cod: 2, nome: 'Grupo II', codProj: 2, equipe: []},
    {cod: 3, nome: 'Grupo III', codProj: 3, equipe: []}
  ];

  ultimoCod = 3;

  constructor(public http: Http) {
    
  }

  getGrupos () {
    return this.grupos;
  }

  addGrupo (nome: string, codProj: number, equipe: any[]) {
    this.ultimoCod++; 
    this.grupos.push({
      cod: this.ultimoCod,
      codProj: codProj,
      nome: nome,
      equipe: equipe
    });
  }

  editGrupo (cod: number, nome: string, codProj: number, equipe: any[]) {
    for (let i = 0; i < this.grupos.length; i++) {
      if(this.grupos[i].cod == cod) {
        this.grupos[i].codProj = codProj;
        this.grupos[i].nome = nome;
        this.grupos[i].equipe = equipe;
        break;
      }
    }
  }

  deleteGrupo (cod: number) {
    for (let i = 0; i < this.grupos.length; i++) {
      if(this.grupos[i].cod == cod) {
        this.grupos.splice(i, 1);
        break;
      }
    }
  }

}
