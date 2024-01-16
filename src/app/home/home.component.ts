import { Router } from '@angular/router';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  version = "Angular " + VERSION.major;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(["/"]);
  }

 
 /*  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    if (this.homepageid) {
      const rect = this.homepageid.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      // const bottomShown = rect.bottom <= window.innerHeight;
      const bottomShown =  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      this.showMyContainer = topShown && bottomShown;
      console.log('topShown' + topShown)
      console.log('bottomShown' + bottomShown)
      // this.showMyContainer = topShown ;
    }
  } */

  goToAboutPage() {

    const contactpage = window.document.getElementById("contactpageid");

    if (contactpage === null) {
      alert('oops');
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

  learnMore() {
    // Redirect to another page, e.g., the about page
    this.router.navigate(['/about']);
  }

  ////////////////////////////

  /* myElement = document.querySelector( 'div' );

  inViewport( element: { getBoundingClientRect: () => any; } ){
  
    // Get the elements position relative to the viewport
  
    var bb = element.getBoundingClientRect();
    
    // Check if the element is outside the viewport
    // Then invert the returned value because you want to know the opposite
  
    return !(bb.top > innerHeight || bb.bottom < 0);
    
  }
    
  // Listen for the scroll event
  
  document.addEventListener( 'scroll', event => {
   
    // Check the viewport status
  
    if( inViewport( myElement ) ){
      
      myElement.style.background = 'red';
      
    } else {
      
      myElement.style.background = '';
      
    }
    
  }) */
}
