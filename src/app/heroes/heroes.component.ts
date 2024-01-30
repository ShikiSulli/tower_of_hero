import { Component, OnInit } from '@angular/core'; // Importez OnInit
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-heroes',
  styleUrls: ['./heroes.component.scss'], 
  standalone: true,
  templateUrl: './heroes.component.html',
  imports: [CommonModule, FormsModule, HeroDetailsComponent, RouterModule],
})
export class HeroesComponent implements OnInit { // Implémentez OnInit
  heroes: Hero[] = [];
 
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
    
    ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes); 
      
  }
}
