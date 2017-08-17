
import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
    // template: `
    // <h3>我的仪表盘</h3>
    // `
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private HeroService: HeroService) {}

    ngOnInit(): void {
        this.HeroService.getHeroesAsync2()
            .then(p => this.heroes = p.slice(1, 5));
    }

}
