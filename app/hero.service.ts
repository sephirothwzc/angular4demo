
import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// 可注入的服务 基于承诺的异步
@Injectable()
export class HeroService {
    getHeroesAsync(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    } // stub

    // 延迟2秒
    getHeroesAsync2(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroes()), 2000 );
        });
    }

    getHeroes(): Hero[] {
        return HEROES;
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroesAsync2()
            .then(p => p.find(h => h.id === id));
    }
}
