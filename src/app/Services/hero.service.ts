import { Injectable } from '@angular/core';
import { Hero } from '../Models/Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes: Hero[] = [
    { id: 1, name: "Doudou", age: 14, country: "China" },
    { id: 2, name: "XiaoGou", age: 13, country: "USA" }];

  constructor() { }

  public GetHero(): Hero[] {
    return this.heroes;
  }
}