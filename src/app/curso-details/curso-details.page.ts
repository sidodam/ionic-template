import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CursoServiceService } from '../main/curso-service.service';
import { ModalController } from '@ionic/angular';
import { CreateCursoComponent } from './create-curso/create-curso.component';
@Component({
  selector: 'app-curso-details',
  templateUrl: './curso-details.page.html',
  styleUrls: ['./curso-details.page.scss'],
})
export class CursoDetailsPage implements OnInit {
  curso: any;
  getName: any;

  constructor(
    private servicio: CursoServiceService,
    private alertController: AlertController,
    private route: ActivatedRoute,
    private navCNavController: NavController,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.curso = this.servicio.getCurso(paramMap.get('cursoId')!);
    });
  }

  async deleteCurso() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          handler: () => {},
        },
        {
          text: 'Yes',

          handler: () => {
            this.servicio.deleteCurso(this.curso.id);
            this.navCNavController.navigateBack('/home');
          },
        },
      ],
    });

    await alert.present();
  }
}
