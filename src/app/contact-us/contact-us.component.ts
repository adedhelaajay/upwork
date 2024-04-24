import { Component } from '@angular/core';
import { FormControl,FormControlName, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm:FormGroup;
  contactForm2:FormGroup;
  showdiv:any=false;
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
    
   // alert("Name"+ contactForm.value.fname +"Email"+contactForm.value.email)
  }
}
