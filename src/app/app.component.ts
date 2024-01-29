import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import {Heroes} from './mock-heroes';
import { HeroesComponent } from './heroes/heroes.component';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroDetailsComponent , HeroesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tour des Heros';
  heroes = Heroes;
selectedHero?: Hero;

}
