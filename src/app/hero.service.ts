import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private _messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this._messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHeroe(id:number): Observable<Hero>{
    this._messageService.add(`HeroService: fetched heroe id${id}`);
    return of(HEROES.find(x=>x.id===id));
  }
}
