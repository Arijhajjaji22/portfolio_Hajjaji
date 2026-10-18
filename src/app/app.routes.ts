import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Arij Hajjaji — Software Engineer (.NET & AI)'
  },
  {
    path: 'work/:id',
    loadComponent: () => import('./features/case-study/case-study.component').then(m => m.CaseStudyComponent),
    title: 'Case Study — Arij Hajjaji'
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: '404 Not Found — Arij Hajjaji'
  }
];
