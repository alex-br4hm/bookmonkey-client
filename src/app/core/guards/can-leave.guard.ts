import { CanDeactivateFn } from '@angular/router';
import {BookDetailComponent} from '../../modules/book/book-detail/book-detail.component';

export const canLeaveGuard: CanDeactivateFn<BookDetailComponent> =
  (component: BookDetailComponent,
   currentRoute,
   currentState,
   nextState) => {
  return confirm('Möchtest du die Route wirklich verlassen?');
};
