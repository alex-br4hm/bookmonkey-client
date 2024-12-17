import { Injectable } from '@angular/core';
import {Book} from '../models/book';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BookDetailComponent} from '../../modules/book/book-detail/book-detail.component';

@Injectable({
  providedIn: 'root',
})

export class BookApiService {
  books: Book[]  = [];
  private readonly API_URL = 'http://localhost:4730';

  constructor(private readonly http: HttpClient) {}

  create(book: Partial<Book>): Observable<Book> {
    return this.http.post<Book>(`${this.API_URL}/books/`, book)
  }

  getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.API_URL}/books`)
  }

  getDetail(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.API_URL}/books/` + id);
  }
}
