import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrls: ['./create-curso.component.scss'],
})
export class CreateCursoComponent implements OnInit {
  @Input() selectedCurso: any;
  

  constructor() {}

  ngOnInit() {}
}
