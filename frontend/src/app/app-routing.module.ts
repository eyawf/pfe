import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './profile/admin/admin.component';
import { PartenaireComponent } from './profile/partenaire/partenaire.component';
import { UserComponent } from './profile/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  {path:'admin',component:AdminComponent},
  {path:'partenaire',component:PartenaireComponent},
  {path:'user',component:UserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
