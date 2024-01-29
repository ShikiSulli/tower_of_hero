import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { HeroesComponent } from './app/heroes/heroes.component';
import { HeroDetailsComponent } from './app/hero-details/hero-details.component';
import { Heroes } from './app/mock-heroes';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
