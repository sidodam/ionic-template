import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateCursoComponent } from './curso-details/create-curso/create-curso.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CreateCursoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot({ animated: false }),
    AppRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
