import { Component, Input } from '@angular/core';
import {NgIf, UpperCasePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Heroes } from '../mock-heroes';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [FormsModule, NgIf, UpperCasePipe],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.scss'
})
export class HeroDetailsComponent {

  @Input() hero: typeof Heroes[] = [];

  constructor() {}
    

  }
