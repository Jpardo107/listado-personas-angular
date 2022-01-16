import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Persona } from './persona.model';

@Injectable()
export class DataServices
{
    constructor(private httpClient:HttpClient, private logginService:LoginService){}

    cargarPersonas()
    {
        const token = this.logginService.getIdToken()
        return this.httpClient.get('https://listado-personas-fd57a-default-rtdb.firebaseio.com/datos.json?auth='+token)
    }

    guardarPersonas(personas:Persona[])
    {
        const token = this.logginService.getIdToken()
        this.httpClient.put('https://listado-personas-fd57a-default-rtdb.firebaseio.com/datos.json?auth='+token, personas)
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
        const token = this.logginService.getIdToken()
        let url:string
        url = `https://listado-personas-fd57a-default-rtdb.firebaseio.com/datos/${index}.json?auth=`+token;
        this.httpClient.put(url,persona)
            .subscribe(response => console.log(`Resultado de la modificacion${response}`),
        error => console.log(`Error al modificar persona ${error}`))
    }

    eliminarPersona(index:number)
    {
        const token = this.logginService.getIdToken()
        let url:string
        url = `https://listado-personas-fd57a-default-rtdb.firebaseio.com/datos/${index}.json?auth=${token}`;
        this.httpClient.delete(url)
            .subscribe(response => console.log(`Resultado de la eliminacion${response}`),
        error => console.log(`Error al eliminar persona ${error}`))
    }
}