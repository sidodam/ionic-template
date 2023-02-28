import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoDetailsPageRoutingModule } from './curso-details-routing.module';

import { CursoDetailsPage } from './curso-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoDetailsPageRoutingModule,
  ],
  declarations: [CursoDetailsPage],
})
export class CursoDetailsPageModule {}
