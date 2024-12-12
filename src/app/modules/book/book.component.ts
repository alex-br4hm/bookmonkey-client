import {Component, DestroyRef, inject, OnInit, TemplateRef} from '@angular/core';
import {BookCardComponent} from './book-card/book-card.component';
import {Book} from '../../core/models/book';
import {NgForOf, NgIf, NgIfContext} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {BookApiService} from '../../core/services/book-api.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    BookCardComponent,
    NgForOf,
    NgIf,
    RouterOutlet
  ],
  providers: [BookApiService],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit {
  books!: Book[];
  noBooks!: TemplateRef<NgIfContext<Book>> | null;
  bookApiTest!: Book[];
  destroyRef = inject(DestroyRef)

  constructor(private bookApiService: BookApiService) {
  }

  ngOnInit() {
    this.bookApiService.getAll().pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe({
        next: (books: Book[]) => this.books = books,
        error: (error: any) => console.error(error),
        complete: () => {}
        }
    );
  }

  navigateToDetail(book: Book) {
    event!.preventDefault();
  }
}
