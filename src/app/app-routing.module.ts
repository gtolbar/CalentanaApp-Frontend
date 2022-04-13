import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { Not404Component } from './pages/not404/not404.component';
import { GuardService } from './_service/guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', pathMatch:'full', redirectTo:'login'},
  { path: 'pages', component: LayoutComponent,
  loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  canActivate: [GuardService]
  },
  { path: 'not-404', component: Not404Component},
  {
    path:'**',redirectTo:'not-404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
