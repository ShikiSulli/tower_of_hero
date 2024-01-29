import { Component, OnInit } from '@angular/core'; // Importez OnInit
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Heroes } from '../mock-heroes';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  styleUrls: ['./heroes.component.scss'], 
  standalone: true,
  templateUrl: './heroes.component.html',
  imports: [CommonModule, FormsModule, HeroDetailsComponent],
})
export class HeroesComponent implements OnInit { // Implémentez OnInit
  heroes: Hero[] = [];
  selectedHero: Hero | null = null;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes); 
      
  }
}
