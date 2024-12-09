import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../core/book';


@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent implements OnInit {
  authorStyle: string = 'red';
  @Input() content!: Book;

  ngOnInit() {
    setTimeout(() => {
      this.authorStyle = 'blue';
    }, 3000);
  }
}
