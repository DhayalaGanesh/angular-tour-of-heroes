import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  title: string='windstorm';
  selectedhero: Hero;
  heroes = HEROES;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(selectedHero: Hero){
    this.selectedhero=selectedHero;
  }

}
