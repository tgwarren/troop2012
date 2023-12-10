import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DirectoryComponent } from './directory/directory.component';
import { EventsComponent } from './events/events.component';
import { EventListingComponent } from './event-listing/event-listing.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SalesComponent } from './sales/sales.component';
import { CookiesComponent } from './cookies/cookies.component';
import { FallProductsComponent } from './fall-products/fall-products.component';
import { PhotosComponent } from './photos/photos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    NavigationComponent,
    DirectoryComponent,
    EventsComponent,
    EventListingComponent,
    SalesComponent,
    CookiesComponent,
    FallProductsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    FontAwesomeModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }