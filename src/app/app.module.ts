import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import { NotifiedComponent } from './notified/notified.component';
import { PhotosComponent } from './photos/photos.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesComponent,
    NotifiedComponent,
    PhotosComponent,
    FooterComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
