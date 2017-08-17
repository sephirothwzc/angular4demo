import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

 const HEROES: Hero[] = [
   {id: 11, name: '克拉克'},
   {id: 12, name: '拉尔夫'},
   {id: 13, name: '丽安娜'},
   {id: 14, name: '雅典娜'},
   {id: 15, name: '镇原斋'},
   {id: 16, name: '椎拳崇'}
 ];

@Component({
  selector: 'my-heroes',
  template: `
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes"
      [class.selected]="hero === myhero"
      (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>

  <div *ngIf="myhero">
    <h2>
      {{this.myhero.name | uppercase}} 是我的英雄
    </h2>
    <button (click)="gotoDetail()">明细</button>
  </div>
  `,
  // template: `
  // <p>英雄列表</p>
  // <p *ngIf="this.kofheros.length >3 "> {{this.kofheros.length}}人一组</p>
  // <div>
  // <h2>主从结构 我的英雄列表</h2>
  // <ul class="heroes">
  //   <li *ngFor="let temphero of this.heroes" [class.selected]="temphero === this.myhero"
  //     (click)="onSelect(temphero)">
  //     <span class="badge">{{temphero.id}}</span> {{temphero.name}}
  //   </li>
  // </ul>
  // </div>
  // <ul>
  //   <li *ngFor="let hero of this.kofheros">
  //     {{hero.name}}
  //   </li>
  // </ul>

  // <div *ngIf="this.myhero">
  //   <h2>我选择的英雄是{{this.myhero.name}}</h2>
  //   <div>
  //     <label>英雄名字：</label>
  //     <input [(ngModel)]="myhero.name" placeholder="英雄名称" type="text">
  //   </div>
  //   <div>
  //   <input type="text" class="form-control" id="name"
  //     required
  //     [(ngModel)]="myhero.name" name="name">
  //     TODO: remove this: {{myhero.name}}
  //   </div>
  // </div>

  // <h1>多个组件</h1>
  // <hero-detail [hero]="this.myhero"></hero-detail>
  // `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})



export class HeroesComponent implements OnInit {

  heros = ['草雉京', '二阶堂红丸', '大门五郎', '特瑞', '东丈', '安迪'];

  myhero: Hero;

  kofheros = [
    new Hero(1, '坂崎由莉'),
    new Hero(2, '坂崎良'),
    new Hero(3, '罗伯特')
  ];
  // 主从结构
  heroes = HEROES;

  // ngOnInit 生命周期钩子
  ngOnInit(): void {
    this.getHeroes();
  }
  // 构造函数注入
  constructor(
    private herService: HeroService,
    private router: Router
  ) {}

  // 选中对象变更
  onSelect(hero: Hero): void {
    this.myhero = hero;
  }

  // 服务获取数据
  getHeroes(): void {
    // 同步
    this.heroes = this.herService.getHeroes();
    // Promise 承诺 异步
    this.herService.getHeroesAsync2().then(p => this.kofheros = p);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.myhero.id]);
  }
}




