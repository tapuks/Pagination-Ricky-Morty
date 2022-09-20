import { Component, OnInit } from '@angular/core';
import { PersonajesService } from './services/personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arrayPersonajes: any[] = [];
  pages: number
  numPages: number = 0;
  constructor(private personajesServices: PersonajesService) {
    this.pages = 1;
  }

  ngOnInit() {
    this.personajesServices.getAll()
      .then(data => {
        console.log(data)
        this.arrayPersonajes = data.results
        this.numPages = data.info.pages;
      })
      .catch(error=> console.log(error))
  }
  pageUp() {
    this.pages++;
    this.personajesServices.getAll(this.pages)
      .then(data => {
        console.log(data)
        this.arrayPersonajes = data.results
      })
      .catch(error=> console.log(error))
  }

   pageDown() {
    this.pages--;
    this.personajesServices.getAll(this.pages)
      .then(data => {
        console.log(data)
        this.arrayPersonajes = data.results
      })
      .catch(error=> console.log(error))
  }


}
