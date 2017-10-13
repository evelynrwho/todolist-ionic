import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { ProjetosPage } from '../pages/projetos/projetos';
import { TabsPage } from '../pages/tabs/tabs';
import { ProjetoPage } from '../pages/projeto/projeto';
import { TarefasPage, Filtro } from '../pages/tarefas/tarefas';
import { TarefaPage } from '../pages/tarefa/tarefa';
import { GruposPage } from '../pages/grupos/grupos';
import { GrupoPage } from '../pages/grupo/grupo';
import { ModalPage, FiltroModal } from '../pages/modal/modal';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProjetosServiceProvider } from '../providers/projetos-service/projetos-service';
import { TarefasServiceProvider } from '../providers/tarefas-service/tarefas-service';
import { GruposServiceProvider } from '../providers/grupos-service/grupos-service';
import { PessoasServiceProvider } from '../providers/pessoas-service/pessoas-service';


@NgModule({
  declarations: [
    MyApp,
    ProjetosPage,
    TabsPage,
    ProjetoPage,
    TarefasPage,
    TarefaPage,
    Filtro,
    GruposPage,
    GrupoPage,
    ModalPage,
    FiltroModal
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProjetosPage,
    TabsPage,
    ProjetoPage,
    TarefasPage,
    TarefaPage,
    GruposPage,
    GrupoPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProjetosServiceProvider,
    TarefasServiceProvider,
    GruposServiceProvider,
    PessoasServiceProvider
  ]
})
export class AppModule {
}
