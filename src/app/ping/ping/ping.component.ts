import { Component, OnInit } from '@angular/core';
import { PingService } from '../ping.service';

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.css']
})
export class PingComponent implements OnInit {

  constructor(private readonly loginService: PingService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login();
  }

  logout() {
    this.loginService.logout();
  }
}
