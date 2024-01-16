import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  
name: String;
email: String;
message: String;

constructor() {
  this.name = '';
  this.email = '';
  this.message = '';
}

submitForm() {
  const requestMessage = `Name entered is ${this.name}. Email is ${this.email} 
  and the request/message is ${this.message}`;
  alert(requestMessage);
}
}
