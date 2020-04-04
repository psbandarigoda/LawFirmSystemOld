import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./Pages/login/login.component";
import {MainComponent} from "./Pages/main/main.component";
import {SummaryComponent} from "./Pages/summary/summary.component";
import {ClientDetailsComponent} from "./Pages/client-details/client-details.component";
import {ClerkMainComponent} from "./Pages/clerk-main/clerk-main.component";
import {ClerkComponent} from "./Pages/clerk/clerk.component";


export const loginRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];


export const pageRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'summary',
        component: SummaryComponent
      },
      {
        path: 'clientDetails',
        component: ClientDetailsComponent
      }
    ]
  },

  // {path: '', pathMatch: "full", redirectTo: '/main/upload'}
];

export const clerkRoutes: Routes = [
  {
    path: 'clerkMain',
    component: ClerkMainComponent,
    children: [
      {
        path: 'clerk',
        component: ClerkComponent
      }
    ]
  },
];

const appRoutes: Routes = <Routes>[
  ...loginRoutes,
  ...pageRoutes,
  ...clerkRoutes,
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
