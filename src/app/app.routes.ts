import { Routes } from '@angular/router';
import { BookComponent } from './modules/book/book.component';
import {NotFoundComponent} from './core/components/not-found/not-found.component';
import {BookDetailComponent} from './modules/book/book-detail/book-detail.component';

export const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'books', component: BookComponent},
  {path: 'books/:id', component: BookDetailComponent},
  {path: 'home', component: BookComponent},
  {path: 'other', component: BookComponent},
  {path: '**', component: NotFoundComponent}
];
