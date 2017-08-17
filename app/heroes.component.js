"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_1 = require("./hero");
var hero_service_1 = require("./hero.service");
var HEROES = [
    { id: 11, name: '克拉克' },
    { id: 12, name: '拉尔夫' },
    { id: 13, name: '丽安娜' },
    { id: 14, name: '雅典娜' },
    { id: 15, name: '镇原斋' },
    { id: 16, name: '椎拳崇' }
];
var HeroesComponent = (function () {
    // 构造函数注入
    function HeroesComponent(herService, router) {
        this.herService = herService;
        this.router = router;
        this.heros = ['草雉京', '二阶堂红丸', '大门五郎', '特瑞', '东丈', '安迪'];
        this.kofheros = [
            new hero_1.Hero(1, '坂崎由莉'),
            new hero_1.Hero(2, '坂崎良'),
            new hero_1.Hero(3, '罗伯特')
        ];
        // 主从结构
        this.heroes = HEROES;
    }
    // ngOnInit 生命周期钩子
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    // 选中对象变更
    HeroesComponent.prototype.onSelect = function (hero) {
        this.myhero = hero;
    };
    // 服务获取数据
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        // 同步
        this.heroes = this.herService.getHeroes();
        // Promise 承诺 异步
        this.herService.getHeroesAsync2().then(function (p) { return _this.kofheros = p; });
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.myhero.id]);
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        template: "\n  <h2>My Heroes</h2>\n  <ul class=\"heroes\">\n    <li *ngFor=\"let hero of heroes\"\n      [class.selected]=\"hero === myhero\"\n      (click)=\"onSelect(hero)\">\n      <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n    </li>\n  </ul>\n\n  <div *ngIf=\"myhero\">\n    <h2>\n      {{this.myhero.name | uppercase}} \u662F\u6211\u7684\u82F1\u96C4\n    </h2>\n    <button (click)=\"gotoDetail()\">\u660E\u7EC6</button>\n  </div>\n  ",
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
        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.Router])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map