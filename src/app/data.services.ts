import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices
{
    constructor(private httpClient:HttpClient){}

    cargarPersonas()
    {
        return this.httpClient.get('https://listado-personas-fd57a-default-rtdb.firebaseio.com/datos.json')
    }

    guardarPersonas(personas:Persona[])
    {
        this.httpClient.put('https://listado-personas-fd57a-default-rtdb.firebaseio.com/datos.json', personas)
        .subscribe(
            (response) => 
            {
                console.log(`Resultado de guardar personas ${response}`)
            },
            (error) => console.log(`Error al guardar personas ${error}`)
            
        )
    }
}