import {CanActivate,Router } from '@angular/router';
export class AuthGaurd implements CanActivate {
    private router: Router | undefined;
    feedbackSubmitted=false;
    canActivate(){
        if(this.feedbackSubmitted){
            console.log('true');
        }
      console.log('AuthGaurd false');
    //   this.router.navigate;
      return this.feedbackSubmitted;
    }
  }