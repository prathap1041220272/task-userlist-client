import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  postLogin(data) {
    return this.http.post('http://localhost:4568/login', data);
  }
}
