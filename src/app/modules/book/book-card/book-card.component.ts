import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../../core/models/book';
import {DatePipe, UpperCasePipe} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {PrefixPipe} from "../../../shared/utills/prefix.pipe";


@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [
    UpperCasePipe,
    DatePipe,
    MatButtonModule,
    PrefixPipe
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent implements OnInit {
  @Input() content!: Book;
  @Output() detailClick = new EventEmitter<Book>();

  ngOnInit() {
  }

  handleDetailClick(click: MouseEvent) {
    event!.preventDefault();
    this.detailClick.emit(this.content);
  }
}