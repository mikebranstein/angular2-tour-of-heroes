import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './app/heroes.component.html',
  styleUrls: ['./app/heroes.component.css'],
})

export class HeroesComponent implements OnInit { 
  constructor(private heroService: HeroService) { }

  ngOnInit() : void {
    this.getHeroes();
  }

  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

  getHeroes() : void {
    this.heroService.getHeroes()
      .then(heroes => {
        this.heroes = heroes;
      });
  }
}
