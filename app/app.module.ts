import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

// import { RouterModule }  from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [
    BrowserModule ,
    FormsModule,
    AppRoutingModule,
    HttpModule
],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
