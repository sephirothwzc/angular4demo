"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_heroes_1 = require("./mock-heroes");
// 可注入的服务 基于承诺的异步
var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeroesAsync = function () {
        return Promise.resolve(mock_heroes_1.HEROES);
    }; // stub
    // 延迟2秒
    HeroService.prototype.getHeroesAsync2 = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getHeroes()); }, 2000);
        });
    };
    HeroService.prototype.getHeroes = function () {
        return mock_heroes_1.HEROES;
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeroesAsync2()
            .then(function (p) { return p.find(function (h) { return h.id === id; }); });
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable()
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map