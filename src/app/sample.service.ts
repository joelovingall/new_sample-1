import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SampleService {

  constructor(private http: HttpClient) { }
  gobtn(): Observable<any> {
    //let body = JSON.stringify({ "user": "mail@dot.com", "pswd": "nopass" });
    //return this.http.get('https://jsonplaceholder.typicode.com/users/4');
    return this.http.get<Object[]>('http://127.0.0.1:5000/userlist');
  }
}
