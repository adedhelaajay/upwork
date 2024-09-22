import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  contactForm:FormGroup;
  contactForm2:FormGroup;
  showdiv: boolean=false;
  constructor(private http: HttpClient) { 

    this.contactForm = new FormGroup({
      fname : new FormControl(""),
      email : new FormControl("",Validators.email),
      message: new FormControl("")
    });


    this.contactForm2 = new FormGroup({
      subscribeemail : new FormControl("",Validators.email),
    });
  }

  toggle(){
    $('.left-nav').addClass('active');
  }
  showtoggle(){
    $('.left-nav').removeClass('active');
  }

  

  emailsubmit(contactForm2:FormGroup){
   // alert("Email"+contactForm2.value.subscribeemail)
    console.log("Email",contactForm2.value.subscribeemail);
    
  }
  submit(contactForm:FormGroup) {
    console.log("Name", contactForm.value.fname ,"Email",contactForm.value.email);

    const data = JSON.stringify({
			"data": {
			  "subject": "Request from Church website!",
			  "name": contactForm.value.fname,
			  "email": contactForm.value.email,
			  "body": contactForm.value.message
			}
		});

    this.http.post('https://cf80f2yh59.execute-api.us-east-1.amazonaws.com/dev/myLamdaDemo', data)
      .subscribe({
        next: (response) => {
          console.log('Form submitted successfully', response);
          contactForm.reset(); // Clear the form after successful submission
          this.showdiv = true;
          this.hideSuccessMessage();
        },
        error: (error) => {
          console.error('Error submitting form', error);
        },
        complete: () => {
          console.log('Form submission completed');
        }
      });

   // alert("Name"+ contactForm.value.fname +"Email"+contactForm.value.email)
  }

  hideSuccessMessage() {
    setTimeout(() => {
      this.showdiv = false;
    }, 3000); // 3000 milliseconds = 3 seconds
  }
  

}
