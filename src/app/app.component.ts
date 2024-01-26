import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import {Heroes} from './mock-heroes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroesComponent, HeroDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tour des Heros';
  heroes = Heroes;


}
