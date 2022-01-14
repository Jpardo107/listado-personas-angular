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
    modificarPersona(index:number, persona:Persona)
    {
        let url:string
        url = `https://listado-personas-fd57a-default-rtdb.firebaseio.com/datos/${index}.json`;
        this.httpClient.put(url,persona)
            .subscribe(response => console.log(`Resultado de la modificacion${response}`),
        error => console.log(`Error al modificar persona ${error}`))
    }

    eliminarPersona(index:number)
    {
        let url:string
        url = `https://listado-personas-fd57a-default-rtdb.firebaseio.com/datos/${index}.json`;
        this.httpClient.delete(url)
            .subscribe(response => console.log(`Resultado de la eliminacion${response}`),
        error => console.log(`Error al eliminar persona ${error}`))
    }
}