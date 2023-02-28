import { v4 as uuidv4 } from 'uuid';

export class Curso {
  constructor(
    public id: string = uuidv4(),
    public nombre: string,
    public imagen: string,
    public punto: number
  ) {}
}
