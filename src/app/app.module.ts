import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PreacherInfoComponent } from './preacher-info/preacher-info.component';


@NgModule({ declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        ContactUsComponent,
        PreacherInfoComponent
    ],
    bootstrap: [AppComponent], 
    imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
    providers: [provideHttpClient(withInterceptorsFromDi())] })

export class AppModule { }
