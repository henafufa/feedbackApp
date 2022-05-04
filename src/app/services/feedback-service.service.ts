import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

  private API_URL = 'https://dev114205.service-now.com/api/now/table/x_662426_dengene_m_dengene_management';

  constructor(private http: HttpClient) { }
  createFeedback(feedback:any){
    // var requestBody = "{\"name\":\"Naol\",\"your_review\":\"New thing\"}"; 
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept':'application/json',
      'Authorization': `Basic ${btoa('admin'+':'+'WzZNK38tNxtr')}`
    });
    return this.http.post(`${this.API_URL}`,feedback,{ headers: headers }) 
    .pipe(map(res => res));
  }
}
