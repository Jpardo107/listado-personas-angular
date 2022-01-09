import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  @Output() personaCreada = new EventEmitter<Persona>()
  //inputNombre: string = ''
  //inputApellido: string = ''

  agregarPersona(nombreInput: HTMLInputElement, apellidoInput: HTMLInputElement)
  {
    let persona1 = new Persona(nombreInput.value,apellidoInput.value)
    this.personaCreada.emit(persona1)
    nombreInput.value = ''
    apellidoInput.value = ''
  }
}
