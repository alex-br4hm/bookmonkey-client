import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {BookApiService} from '../../../core/services/book-api.service';
import {Book} from '../../../core/models/book';
import {Observable, switchMap} from 'rxjs';
import {AsyncPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf
  ],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent implements OnInit {
  book$!: Observable<Book>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookApiService: BookApiService,
  ) {
  }

  ngOnInit() {
    this.book$ = this.route.params.pipe(
      switchMap((params: Params) => this.bookApiService.getDetail(params['id']))
    )
  }
}
