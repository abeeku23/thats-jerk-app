import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IntroComponent } from './intro/intro.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { YelpComponent } from './yelp/yelp.component';
import { StopsComponent } from './stops/stops.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { YelpReviewComponent } from './yelp/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IntroComponent,
    MenuComponent,
    MenuItemComponent,
    AboutComponent,
    YelpComponent,
    YelpReviewComponent,
    StopsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
