import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGardService } from './gards/guest-gard.service';
import { RoleGardService } from './gards';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'landing',
    loadChildren: 'src/app/login/login.module#LoginModule',
    // canActivate: [GuestGardService]
  },
  {
    path: 'dashboard',
    loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule',
    // canActivate: [RoleGardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false, enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
