import { Component, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/Models/Hero';
import { HeroService } from 'src/app/Services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  public heroes : Hero[];
  public choosen_hero : Hero;
  private heroService : HeroService;

  constructor(heroService : HeroService) { 
    this.heroService = heroService;
  }

  ngOnInit(): void {
    this.heroes = this.heroService.GetHero();
  }

  public chooseHero(hero : Hero) : void{
    this.choosen_hero = hero;
  }

}
