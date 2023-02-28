import { Component, OnInit } from '@angular/core';
import { CursoServiceService } from '../main/curso-service.service';
import { Curso } from '../main/cursos.model';
@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss'],
})
export class ListaCursosComponent implements OnInit {
  listaCursos: Curso[];
  constructor(private servicio: CursoServiceService) {}

  ngOnInit() {
    this.servicio.getCursos().subscribe((c) => {
      this.listaCursos = c;
    });
  }
}
