import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  constructor(private _heroService: HeroService, private _activatedRoute: ActivatedRoute, private _location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(){
    const id = +this._activatedRoute.snapshot.paramMap.get('id');
    this._heroService.getHeroe(id).subscribe(
      success=> this.hero=success
    )
  }
  hero: Hero

  goBack(){
    this._location.back();
  }
  //@Input() hero: Hero

}
