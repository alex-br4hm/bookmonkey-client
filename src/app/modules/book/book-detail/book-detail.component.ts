import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookApiService} from '../../../core/services/book-api.service';
import {Book} from '../../../core/models/book';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent implements OnInit {
  book!: Book;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookApiService: BookApiService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.bookApiService.getDetail(id).subscribe(book => {
        this.book = book;
      })
    })
  }
}
