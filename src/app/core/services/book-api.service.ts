import { Injectable } from '@angular/core';
import {Book} from '../models/book';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class BookApiService {
  books: Book[]  = [];

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:4730/books')
  }
}
