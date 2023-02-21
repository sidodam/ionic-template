import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoDetailsPage } from './curso-details.page';

const routes: Routes = [
  {
    path: '',
    component: CursoDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoDetailsPageRoutingModule {}
