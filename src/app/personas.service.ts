import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";


@Injectable()
export class PersonasService
{
    personas: Persona[] = [new Persona('Jaime', 'Pardo'), new Persona('Doris', 'Urbe'), new Persona('Daniela', 'Pardo')]

    saludar = new EventEmitter<number>()

    constructor(private logginService:LoggingService){}
    agregarPersona(persona: Persona)
    {
      this.logginService.enviarMensajeConsola(`Agregamos persona ${persona.nombre}`)
      this.personas.push(persona)
    }
}