import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../../core/models/book';
import {DatePipe, UpperCasePipe} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {PrefixPipe} from "../../../shared/utills/prefix.pipe";
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [
    UpperCasePipe,
    DatePipe,
    MatButtonModule,
    PrefixPipe,
    RouterLink
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent implements OnInit {
  @Input() content!: Book;
  @Output() detailClick = new EventEmitter<Book>();
  detailsClicked: boolean = false;

  ngOnInit() {
  }

  handleDetailClick(click: MouseEvent) {
    event!.preventDefault();
    this.detailClick.emit(this.content);
    this.detailsClicked = !this.detailsClicked;
  }

}
