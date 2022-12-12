import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
const routes: Routes = [
  // localhost:4200
  { path: '', component: AccountComponent, pathMatch: 'full' },
  // localhost:4200/learn
  {
    path: 'home',
    component: LandingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
