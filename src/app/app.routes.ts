import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesComponent } from './heroes/heroes.component';

export const routes: Routes = [
    { path:'', redirectTo: '/dashboard', pathMatch: 'full' },
    { path:'dashboard', component: DashboardComponent },
    { path:'detail/:id', component: HeroDetailsComponent },
    { path:'heroes', component: HeroesComponent },
];
