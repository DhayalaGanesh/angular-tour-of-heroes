import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  title: string='windstorm';
  selectedhero: Hero;
  heroes: Hero[];
  
  constructor(private _heroService: HeroService, private _messageService: MessageService) {
   }

  ngOnInit(): void {
    this.getHeroes();

  }

  getHeroes(): void{
    this._heroService.getHeroes().subscribe(
      success=>{
        this.heroes=success;
      },
      error=>{
        alert('Error');
      }
    );
  }

  onSelect(selectedHero: Hero){
    this.selectedhero=selectedHero;
    this._messageService.add(`HeroesComponent: Selected hero id=${selectedHero.id}`);
  }

}
