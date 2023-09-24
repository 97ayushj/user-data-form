import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserForm } from "../UserForm";
import { Observable } from "rxjs";

@Injectable()
export class freeApiService{
    constructor(private httpclient: HttpClient){}

    post(userform: UserForm): Observable<any>{
        return this.httpclient.post("http://localhost:8080/postuser",userform);
    }

}