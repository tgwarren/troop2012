import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, ArrayOfComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DirectoryComponent } from './directory/directory.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { EventsComponent } from './events/events.component';
import { MemberListingComponent } from './member-listing/member-listing.component';
import { EventListingComponent } from './event-listing/event-listing.component';
import { FormLinksComponent } from './form-links/form-links.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { RemoveMemberComponent } from './remove-member/remove-member.component';
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
    MemberFormComponent,
    EventsComponent,
    MemberListingComponent,
    EventListingComponent,
    FormLinksComponent,
    ArrayOfComponents,
    EditMemberComponent,
    RemoveMemberComponent,
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