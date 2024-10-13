import { Component } from '@angular/core';

@Component({
  selector: 'app-preacher-info',
  // standalone: true,
  // imports: [],
  templateUrl: './preacher-info.component.html',
  styleUrl: './preacher-info.component.css'
})
export class PreacherInfoComponent {
  isVisible = false;
  show() { this.isVisible = true; }
  close() { this.isVisible = false; }
  // Method to close the overlay when clicking outside the content
  closeOverlay(event: MouseEvent) { this.isVisible = false; }
}
