import { Routes } from '@angular/router';
import { Home } from './components/pages/home';
import { LoginComponent } from './components/shared/consts/login';
import { PurohitComponent } from './components/pages/purohit';
import { SignupComponent } from './components/shared/consts/signup';

export const routes: Routes = [
  { path: '', component: PurohitComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // { path: 'admin-dashboard', component: },
  { path: 'purohits', component: PurohitComponent },
];
