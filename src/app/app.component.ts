import { Component } from '@angular/core';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeroDetailsComponent , HeroesComponent, MessagesComponent, RouterOutlet, RouterModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  title = 'Tour des Heros';
}
