import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { CatProfileComponent } from './cat-profile/cat-profile.component';
import { PHumanTestComponent } from './p-human-test/p-human-test.component';
import { PCatTestComponent } from './p-cat-test/p-cat-test.component';

const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: ':id',
        component: CatProfileComponent,
      },
    ],
  },
  {
    path: 'p-cat-test',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: ':id',
        component: PCatTestComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'test', component: PHumanTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
