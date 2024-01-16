import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  // add in constructor
constructor(private router: Router) {}

  goToHomePage() {

    const homepageid = window.document.getElementById("homepageid")

    if (homepageid === null) { 
      // Situation where homepageid is not availabe, use routs to go-home
      this.router.navigate(['/']);
    } else {
      // since you've done the nullable check
      // TS won't complain from this point on
      homepageid.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      }); // <- no error
    }
  }

  goToContactPage() {

    const contactpage = window.document.getElementById("contactpageid")

    if (contactpage === null) {
      this.router.navigate(['/contact']);
    } else {
      // since you've done the nullable check
      // TS won't complain from this point on
      contactpage.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      }); // <- no error
    }

    // document.getElementById("contactpageid").scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest"
    // });
    // this.router.navigate([], { fragment: "contactpageid" });
  }

  goToAboutPage() {

    const aboutpage = window.document.getElementById("aboutpageid")

    if (aboutpage === null) {
      this.router.navigate(['/about']);
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
