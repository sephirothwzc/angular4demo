
import { Component } from '@angular/core';

// 装饰器 紧随其后的类标记成了组件类
@Component({
    // css 选择器 父级html中查找<my-app>标签 创建并插入该组件
    selector: 'my-app',
    // 组件html模版 or 模版地址
    template: `
    <h1>{{this.title}}</h1>
    <nav>
        <a routerLink="/heroes" routerLinkActive="active">英雄</a>
        <a routerLink="/dashboard" routerLinkActive="active">仪表盘</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    // 组件对应的样式表
    styleUrls: ['./app.component.css']
    // providers 组件所需服务的依赖注入提供商数组
})

export class AppComponent {
    title = 'kof 英雄谱';
}
