import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit 
{
  personas: Persona[] = [];

  constructor(
    private personaService: PersonasService,
    private router: Router
  ) {}
  ngOnInit(): void {

    this.personaService.obtenerPersonas().subscribe((personas:Object) => {this.personas = personas as Persona[]; this.personaService.setPersonas(personas as Persona[])}) 
  }

  agregar() {
    this.router.navigate(['personas/agregar']);
  }
}