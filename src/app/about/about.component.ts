import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  name: String;
  email: String;

  constructor() {
    this.name = '';
    this.email = '';
  }

  submitForm() {
    const requestMessage = `Name entered is ${this.name}. Email is ${this.email} `;
    alert(requestMessage);
  }

}
