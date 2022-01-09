import { Component } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'listado de personas';
  personas: Persona[] = [new Persona('Jaime', 'Pardo'), new Persona('Doris', 'Urbe'), new Persona('Daniela', 'Pardo')]

  constructor(private logger:LoggingService){}
  personaAgregada(persona: Persona)
  {
    this.logger.enviarMensajeConsola('Se envio al arreglo a la persona: '+persona.nombre+' '+persona.apellido)
    this.personas.push(persona)
  }

}
