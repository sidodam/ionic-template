import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';

import { FormularioComponent } from '../formulario/formulario.component';
import { ListaCursosComponent } from '../lista-cursos/lista-cursos.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [MainPage, FormularioComponent, ListaCursosComponent],
})
export class MainPageModule {}
