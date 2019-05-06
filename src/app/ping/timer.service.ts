import { Injectable } from '@angular/core';
import { PingService } from './ping.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(private readonly loginService: PingService) { }

  id: any;
  actual: number;
  limit: number;
  private readonly adviceTime = 60;

  init(seconds: number): void {
    this.actual = 0;
    this.limit = seconds;
  }

  start(): void {
    this.id = setTimeout(() => {
      this.tick();
    }, 1000);
  }

  reset(): void {
    this.init(this.limit);
  }

  private tick(): void {
    this.actual++;
    if (this.actual > this.limit - this.adviceTime) {
      clearTimeout(this.id);
      this.showConfirm();
    }
  }

  private showConfirm(): void {
    const timeLapsedOrigin = new Date().getTime();
    const result = confirm('You want to continue logged?');
    const timeLapsedFinal = new Date().getTime();
    this.execute(timeLapsedOrigin, timeLapsedFinal, result);
  }

  private execute(timeLapsedOrigin: number, timeLapsedFinal: number, result: any): void {
    if (timeLapsedFinal - timeLapsedOrigin > this.adviceTime * 1000) {
      alert('Timed Out!');
    } else {
      if (result) {
        this.loginService.login();
        this.reset();
      } else {
        this.loginService.logout();
      }
    }
  }
}
