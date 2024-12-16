import { Routes } from '@angular/router';

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
        loadComponent: () =>
          import('./modules/book/book-detail/book-detail.component').then(
            m => m.BookDetailComponent
          ),
      },
    ],
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
