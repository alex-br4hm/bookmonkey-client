import { Injectable } from '@angular/core';
import {Book} from '../models/book';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  books: Book[]  = [];

  constructor() {
    this.books = [
      {
        'title': 'Atomic Habits',
        'author': 'James Clear',
        'abstract': 'A guide to building good habits and breaking bad ones.',
        'publishDate': new Date('2018-10-16'),
        'gender': 'Male'
      },
      {
        'title': '1984',
        'author': 'George Orwell',
        'abstract': 'A dystopian novel about a totalitarian regime.',
        'publishDate': new Date('1949-06-08'),
        'gender': 'Male'
      },
      {
        'title': 'Sapiens: A Brief History of Humankind',
        'author': 'Yuval Noah Harari',
        'abstract': 'An exploration of the history and impact of Homo sapiens.',
        'publishDate': new Date('2011-06-04'),
        'gender': 'Male'
      },
      {
        'title': 'The Subtle Art of Not Giving a F*ck',
        'author': 'Mark Manson',
        'abstract': 'A counterintuitive approach to living a good life.',
        'publishDate': new Date('2016-09-13'),
        'gender': 'Male'
      },
      {
        'title': 'To Kill a Mockingbird',
        'author': 'Harper Lee',
        'abstract': 'A novel about racial injustice in the American South.',
        'publishDate': new Date('1960-07-11'),
        'gender': 'Female'
      },
      {
        'title': 'The Catcher in the Rye',
        'author': 'J.D. Salinger',
        'abstract': 'A story of teenage angst and alienation.',
        'publishDate': new Date('1951-07-16'),
        'gender': 'Male'
      },
      {
        'title': 'The Great Gatsby',
        'author': 'F. Scott Fitzgerald',
        'abstract': 'A critique of the American Dream during the Jazz Age.',
        'publishDate': new Date('1925-04-10'),
        'gender': 'Male'
      },
      {
        'title': 'Becoming',
        'author': 'Michelle Obama',
        'abstract': 'The memoir of the former First Lady of the United States.',
        'publishDate': new Date('2018-11-13'),
        'gender': 'Female'
      },
      {
        'title': 'The Alchemist',
        'author': 'Paulo Coelho',
        'abstract': 'A philosophical novel about following your dreams.',
        'publishDate': new Date('1988-04-01'),
        'gender': 'Male'
      },
      {
        'title': 'Harry Potter and the Sorcerer’s Stone',
        'author': 'J.K. Rowling',
        'abstract': 'The first book in the Harry Potter series, about a young wizard.',
        'publishDate': new Date('1997-06-26'),
        'gender': 'Divers'
      }
    ];

  }

  getAll(): Observable<Book[]>{
    return of(this.books);
  }
}
