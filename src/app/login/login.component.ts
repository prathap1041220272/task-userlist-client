import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private login: LoginService
  ) { }

  ngOnInit() {
  }
  userLogin(loginForm) {
    this.login.postLogin(loginForm.value)
      .subscribe((data: any) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['login/users']);
      }, (err) => {
        swal({
          title: 'error!',
          text: 'login failed',
          type: 'error',
          confirmButtonText: 'Ok'
        });
      });
  }
}
