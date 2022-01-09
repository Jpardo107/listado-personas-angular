import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent{

  @Output() personaCreada = new EventEmitter<Persona>()
  //inputNombre: string = ''
  //inputApellido: string = ''
  @ViewChild('nombreInput') nombre: ElementRef;
  @ViewChild('apellidoInput') apellido: ElementRef;

  constructor(private loggingService:LoggingService){}

  agregarPersona()
  {
    let persona1 = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value)
    this.loggingService.enviarMensajeConsola('Se envio Nombre: '+persona1.nombre+'\n Apellido: '+persona1.apellido)
    this.personaCreada.emit(persona1)
    this.nombre.nativeElement.value = ''
    this.apellido.nativeElement.value = ''

  }
}
