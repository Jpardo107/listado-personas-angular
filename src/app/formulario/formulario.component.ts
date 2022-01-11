import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent{

  //inputNombre: string = ''
  //inputApellido: string = ''
  @ViewChild('nombreInput') nombre: ElementRef;
  @ViewChild('apellidoInput') apellido: ElementRef;

  constructor(private loggingService:LoggingService, private personaService:PersonasService){
    this.personaService.saludar.subscribe((indice:number) => alert(`El indice es ${indice}`))
  }

  agregarPersona()
  {
    let persona1 = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value)
    this.personaService.agregarPersona(persona1)
    //this.loggingService.enviarMensajeConsola('Se envio Nombre: '+persona1.nombre+'\n Apellido: '+persona1.apellido)


    this.nombre.nativeElement.value = ''
    this.apellido.nativeElement.value = ''

  }
}
