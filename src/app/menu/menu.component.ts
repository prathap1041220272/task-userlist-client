import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuradAuthService } from '../gurad-auth.service';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLoggedIn = false;
  constructor(
    private userAuth: GuradAuthService,
    private router: Router,
    private userServ: UsersService
  ) {
    this.userServ.userSubject.subscribe(
      event => {
        this.isLoggedIn = event;
      }
    );
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.isLoggedIn = false;
  }
}
