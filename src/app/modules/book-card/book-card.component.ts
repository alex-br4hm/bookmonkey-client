import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent implements OnInit {
  authorStyle: string = 'red';

  ngOnInit() {
    setTimeout(() => {
      this.authorStyle = 'blue';
    }, 3000);
  }
}
