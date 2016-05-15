import { Component }       from '@angular/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {DashboardComponent} from './dashboard.component';
import { HeroDetailComponent } from "./hero-detail.component";

@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent,
    }
])

@Component({
    template: ` <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
  </nav>
  <router-outlet></router-outlet>`,
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [  ROUTER_PROVIDERS, HeroService],
})
export class AppComponent {
    title = 'Tour of heroes';
}