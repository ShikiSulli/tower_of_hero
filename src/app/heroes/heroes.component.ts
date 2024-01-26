import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Heroes } from '../mock-heroes'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,FormsModule,NgFor],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

  heroes = Heroes;
  selectedHero: Hero;

  constructor() {
    this.selectedHero = {} as Hero;
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
