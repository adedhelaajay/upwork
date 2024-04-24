import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goToContactPage(){

    const aboutpage = window.document.getElementById("contact")
    if (aboutpage === null) {
      this.router.navigate(['/contact']);
    } else {
      // since you've done the nullable check
      // TS won't complain from this point on
      aboutpage.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      }); // <- no error
    }
  }

  goToGettingsPage(){

    const aboutpage = window.document.getElementById("requestPray")
    if (aboutpage === null) {
      this.router.navigate(['/requestPray']);
    } else {
      // since you've done the nullable check
      // TS won't complain from this point on
      aboutpage.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      }); // <- no error
    }
  }



  goToAboutPage(){

    const aboutpage = window.document.getElementById("about-us")
    if (aboutpage === null) {
      this.router.navigate(['/about-us']);
    } else {
      // since you've done the nullable check
      // TS won't complain from this point on
      aboutpage.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      }); // <- no error
    }
  }

  goToHomePage(){

    const aboutpage = window.document.getElementById("home")
    if (aboutpage === null) {
      this.router.navigate(['/home']);
    } else {
      // since you've done the nullable check
      // TS won't complain from this point on
      aboutpage.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      }); // <- no error
    }
  }


}
