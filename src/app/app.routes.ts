import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./common/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./common/about/about.component').then(m => m.AboutComponent) },
  { path: 'contact', loadComponent: () => import('./common/contact/contact.component').then(m => m.ContactComponent) }
];
