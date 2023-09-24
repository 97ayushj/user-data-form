import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, catchError, of } from 'rxjs';
import { Response } from 'src/app/Response';
import { UserForm } from 'src/app/UserForm';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  implements OnInit{
  firstName:string | undefined;
  lastName:string | undefined;
  gender:string | undefined;
  comment:string | undefined;
  response: Response | undefined;



  constructor(private httpclient: HttpClient){}

ngOnInit(): void {}

post(userform: UserForm): Observable<any>{
  return this.httpclient.post("http://localhost:8082/postuser",userform);
  console.log("Making Post request" + userform);
  
}

onSubmit() {


  const user ={
  firstName:this.firstName,
  lastName:this.lastName,
  gender:this.gender,
  comment:this.comment
  }
  console.log(user);

  this.post(user).subscribe(data =>{
    this.response = data;

    catchError((err: any) => {
      this.response = err.body;
      console.log(`Error: ${this.response?.message}`);
      return of(null);
    })
  })

  console.log(this.response);

}

}
