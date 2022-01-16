import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'listado de personas';
  constructor(private loginService:LoginService){}
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBv8pAM6kW5Jt8FUwzGEggxEvqkKnf4U2Q",
      authDomain: "listado-personas-fd57a.firebaseapp.com",
    })
  }
  isAutenticado()
  {
    return this.loginService.isAutenticado()
  }
  salir()
  {
    this.loginService.logout()
  }
} 
