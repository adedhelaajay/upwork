import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-slide-in-nav',
  templateUrl: './slide-in-nav.component.html',
  styleUrls: ['./slide-in-nav.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ left: '0' })),
      state('out', style({ left: '-250px' })),
      transition('in => out', animate('0.3s')),
      transition('out => in', animate('0.3s')),
    ]),
  ],
})
export class SlideInNavComponent {
  isOpen = true;

  toggleNavigation() {
    this.isOpen = !this.isOpen;
  }
}
