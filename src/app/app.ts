import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainserviceTs } from './service/mainservice.ts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
constructor(private mainservice: MainserviceTs) {}

  showprints() {
    this.mainservice.getprints().subscribe(response => {
      console.log(response);
    });
  }
}
