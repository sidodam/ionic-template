import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { CursoServiceService } from '../main/curso-service.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  myForm: FormGroup;
  curso: FormControl;
  puntos: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private cursoService: CursoServiceService
  ) {}

  ngOnInit() {
    this.curso = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
    ]);

    this.puntos = new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]$|^10$'),
    ]);

    // create a FormGroup instance with two FormControls
    this.myForm = this.formBuilder.group({
      curso: this.curso,
      puntos: this.puntos,
    });
  }

  addCurso() {
    if (this.myForm.valid) {
      const randomNumber = Math.floor(Math.random() * 1000);
      let curso = {
        id: uuidv4(),
        nombre: this.curso.value,

        imagen: `https://picsum.photos/${randomNumber}`,
        punto: this.puntos.value,
      };
      this.cursoService.addCurso(curso);
    } else {
      this.raiseAlert();
    }
  }

  async raiseAlert() {
    let error = '';
    if (this.curso.invalid) {
      error += `Revisa el Nombre del curso <br>`;
    }
    if (this.puntos.invalid) {
      error += ` Revisa los puntos <br>`;
    }

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ERROR',
      message: error,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
