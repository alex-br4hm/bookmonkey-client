import { Injectable } from '@angular/core';
import {Book} from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  books: Book[]  = [];

  constructor() { }

  getAll(): Book[] {
    return this.books;
  }
}
