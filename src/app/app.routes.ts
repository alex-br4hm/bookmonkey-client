import { Routes } from '@angular/router';
import {canLeaveGuard} from './core/guards/can-leave.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },

  {
    path: 'books',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./modules/book/book.component').then(m => m.BookComponent),
      },

      {
        path: ':id',
        canDeactivate: [ canLeaveGuard ],
        loadComponent: () =>
          import('./modules/book/book-detail/book-detail.component').then(
            m => m.BookDetailComponent
          ),
      },
    ],
  },

  {
    path: 'add-book',
    loadComponent: () =>
      import('./modules/book/new-book/new-book.component').then(m => m.NewBookComponent),
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./modules/book/book.component').then(m => m.BookComponent),
  },

  {
    path: 'other',
    loadComponent: () =>
      import('./modules/book/book.component').then(m => m.BookComponent),
  },

  {
    path: '**',
    loadComponent: () =>
      import('./core/components/not-found/not-found.component').then(
        m => m.NotFoundComponent
      ),
  },
];
