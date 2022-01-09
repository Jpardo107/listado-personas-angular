import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  @Output() personaCreada = new EventEmitter<Persona>()
  inputNombre: string = ''
  inputApellido: string = ''

  agregarPersona()
  {
    let persona1 = new Persona(this.inputNombre, this.inputApellido)
    this.personaCreada.emit(persona1)
    this.inputApellido = ''
    this.inputNombre = ''
  }
}
