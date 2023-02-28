import { Injectable } from '@angular/core';
import { Curso } from './cursos.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursoServiceService {
  //craete custo array of type observable of type Curso

  private cursoArray: Curso[] = [];

  private cursoSubject = new BehaviorSubject<Curso[]>(this.cursoArray);

  getCursos() {
    return this.cursoSubject.asObservable();
  }
  addCurso(curso: Curso) {
    this.cursoArray.push(curso);
    this.cursoSubject.next(this.cursoArray);
  }

  getCurso(cursoId: string) {
    return this.cursoArray.find((p) => p.id === cursoId);
  }

  deleteCurso(cursoId: string) {
    this.cursoArray = this.cursoArray.filter((p) => p.id !== cursoId);
    this.cursoSubject.next(this.cursoArray);
  }

  updateCurso(curso: Curso) {
    const index = this.cursoArray.findIndex((p) => p.id === curso.id);
    this.cursoArray[index] = curso;
    this.cursoSubject.next(this.cursoArray);
  }

  constructor() {}
}
