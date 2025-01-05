import { Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: 'updates', component: HeaderComponent },
  { path: 'about', component: HeaderComponent },
  { path: 'contact', component: HeaderComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
