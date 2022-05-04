import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,  Validators  } from '@angular/forms';
import { Router,CanActivate } from '@angular/router';
import { AuthGaurd } from 'src/app/services/authGuard';
import { FeedbackServiceService } from 'src/app/services/feedback-service.service';
 

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})

export class FeedbackFormComponent implements OnInit {

  feedbacks:any;
  feedbackSubject:any;
  response:any;
  satisfaction:any;
  sender= 'hena';
  feedbackForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    review: new FormControl(''),
    timelyResponse: new FormControl(''),
    overallSatisfaction: new FormControl(''),
  });
  constructor(private feedbackService: FeedbackServiceService, private router: Router, private authGuard:AuthGaurd) { }

  ngOnInit(): void {
  }
  onChangeSubject(selectedFeedback:any){
    console.log(selectedFeedback.target.value);
    this.feedbackSubject= selectedFeedback.target.value;
  }
  onChangeResponse(selectedResponse:any){
    console.log(selectedResponse.target.value);
    this.response= selectedResponse.target.value;
  }
  onChangeSatisfaction(selectedSatisfaction:any){
    console.log(selectedSatisfaction.target.value);
    this.satisfaction= selectedSatisfaction.target.value;
  }
  // createFeedback(feedbacks: any){}
  createFeedback() {
    let feedback = this.feedbackForm.value;
    console.log(this.feedbackForm.value, feedback.name, feedback.email);
    this.feedbacks= {
      'name':feedback.name,
      'email':feedback.email,
      'our_support': this.feedbackSubject,
      'your_review':feedback.review,
      'timely_response': this.response,
      'overall_satisfaction':this.satisfaction,
      'u_sender': this.sender

    }
    console.log('each value',this.feedbacks);
    this.feedbackService.createFeedback( this.feedbacks)
      .subscribe((res) => {
        console.log('appointment requested successfully', res);
        this.authGuard.feedbackSubmitted= true;
        this.router.navigate(['/response']);
      },
      (error: ErrorEvent)=>{
        alert(error.error.message);
      }
      );

  }

}
