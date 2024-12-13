import { Routes } from '@angular/router';
import { BookComponent } from './modules/book/book.component';
import {NotFoundComponent} from './core/components/not-found/not-found.component';

export const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'books', component: BookComponent},
  {path: 'home', component: BookComponent},
  {path: 'other', component: BookComponent},
  {path: '**', component: NotFoundComponent}
];
