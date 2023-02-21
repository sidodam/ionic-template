import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'curso-details',
    loadChildren: () =>
      import('./curso-details/curso-details.module').then(
        (m) => m.CursoDetailsPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./main/main.module').then((m) => m.MainPageModule),
  },
  {
    path: 'curso-details',
    loadChildren: () =>
      import('./curso-details/curso-details.module').then(
        (m) => m.CursoDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
