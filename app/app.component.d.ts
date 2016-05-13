import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
export declare class AppComponent implements OnInit {
    private heroService;
    constructor(heroService: HeroService);
    title: string;
    selectedHero: Hero;
    heroes: Hero[];
    onSelect(hero: Hero): void;
    getHeroes(): void;
    ngOnInit(): void;
}
