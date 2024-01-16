import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { LeftColumnComponent } from './home/left-column/left-column.component';
import { CenterColumnComponent } from './home/center-column/center-column.component';
import { RightColumnComponent } from './home/right-column/right-column.component';
import { BannerComponent } from './home/banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SlideInNavComponent } from './slide-in-nav/slide-in-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    ContactComponent,
    LeftColumnComponent,
    CenterColumnComponent,
    RightColumnComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    SlideInNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
