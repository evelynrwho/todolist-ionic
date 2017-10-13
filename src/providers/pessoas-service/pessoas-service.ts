import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PessoasServiceProvider {

  pessoas = [
    {cod: 1, nome: 'João Marcelo Passos'},
    {cod: 2, nome: 'Patrícia Oliveira Lopes'},
    {cod: 3, nome: 'Túlio Alves Carneiro'}, 
    {cod: 4, nome: 'Laura Macedo Dias'},
    {cod: 5, nome: 'Maria Isabel Teixeira de Moraes'},
    {cod: 6, nome: 'Karina Peixoto Garcia'}, 
    {cod: 7, nome: 'Rodrigo Braga de Oliveira Santos'}
  ];
  constructor(public http: Http) {
   
  }

  getPessoas() {
    return this.pessoas;
  }


}
