import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DirectoryComponent } from './directory/directory.component';
import { EventsComponent } from './events/events.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { SalesComponent } from './sales/sales.component';
import { CookiesComponent } from './cookies/cookies.component';
import { FallProductsComponent } from './fall-products/fall-products.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'directory', component: DirectoryComponent,
      children: [
      { path: 'member-form', component: MemberFormComponent },
    ]
  },
  { path: 'events', component: EventsComponent },
  { path: 'sales', component: SalesComponent,
      children: [
      { path: 'cookies', component: CookiesComponent },
      { path: 'fall-products', component: FallProductsComponent },
    ]
  },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

const formRoutes: Routes = [
  { path: 'member-form', component: MemberFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ArrayOfComponents = [DirectoryComponent, MemberFormComponent];