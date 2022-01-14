import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent{

  inputNombre: string = ''
  inputApellido: string = ''
  index: number
  modoEdicion:number

  constructor(private loggingService:LoggingService, 
              private personaService:PersonasService,
              private router:Router,
              private route: ActivatedRoute){
    this.personaService.saludar.subscribe((indice:number) => alert(`El indice es ${indice}`))
  }
  ngOnInit()
  {
    this.index = this.route.snapshot.params['id']
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion']
    if(this.modoEdicion != null && this.modoEdicion === 1)
    {
      let persona:Persona = this.personaService.encontrarPersona(this.index)
      this.inputNombre = persona.nombre
      this.inputApellido = persona.apellido
    }

  }

  onGuardarPersona()
  {
    let persona1 = new Persona(this.inputNombre, this.inputApellido)
    if(this.modoEdicion != null && this.modoEdicion === 1)
    {
      this.personaService.modificarPersona(this.index, persona1)
    }
    else
    {
      this.personaService.agregarPersona(persona1)
    }
    this.router.navigate(['personas'])
    


    this.inputNombre= ''
    this.inputApellido = ''

  }
  eliminarPersona()
  {
    if(this.index != null)
    {
      this.personaService.eliminarPersona(this.index)
    }
    this.router.navigate(['personas'])
  }
}
