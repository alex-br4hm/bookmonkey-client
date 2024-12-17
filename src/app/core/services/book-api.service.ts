import { Injectable } from '@angular/core';
import {Book} from '../models/book';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

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
