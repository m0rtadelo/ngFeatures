import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PingService {

  constructor() { }

  logout() {
    alert('logout');
  }

  login() {
    alert('login');
  }
}
