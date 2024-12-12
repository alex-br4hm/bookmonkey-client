import {Component, DestroyRef, inject, OnInit, TemplateRef} from '@angular/core';
import {BookCardComponent} from './book-card/book-card.component';
import {Book} from '../../core/models/book';
import {AsyncPipe, NgForOf, NgIf, NgIfContext} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {BookApiService} from '../../core/services/book-api.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    BookCardComponent,
    NgForOf,
    NgIf,
    RouterOutlet,
    AsyncPipe
  ],
  providers: [BookApiService],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit {
  books$!: Observable<Book[]>;

  constructor(private bookApiService: BookApiService) {
  }

  ngOnInit() {
      this.books$ = this.bookApiService.getAll();
  }

  navigateToDetail(book: Book) {
    event!.preventDefault();
  }
}
