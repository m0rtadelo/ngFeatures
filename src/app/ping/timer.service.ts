import { Injectable } from '@angular/core';
import { PingService } from './ping.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  id: any;
  actual: number;
  limit: number;
  private readonly adviceTime = 5;

  constructor(private readonly loginService: PingService) { }

  /**
   * Inits the session timer
   * @param seconds session duration
   */
  init(seconds: number): void {
    this.actual = 0;
    if (!!seconds) {
      this.limit = seconds;
    }
  }

  /**
   * Inits & Starts the session timer to allow interactive ping
   * @param seconds session duration
   */
  start(seconds?: number): void {
    this.init(seconds);
    this.id = setInterval(() => {
      this.tick();
    }, 1000);
  }

  /**
   * Resets the counter
   */
  reset(): void {
    this.init(this.limit);
  }

  /**
   * Adds a second to the counter and checks for time consumation.
   * This function MUST be called every second.
   */
  private tick(): void {
    this.actual++;
    // console.log(`${this.actual} of ${this.limit}`);
    if (this.actual > this.limit - this.adviceTime) {
      clearInterval(this.id);
      this.showConfirm();
    }
  }

  /**
   * Shows a confirm dialog allowing user to stay or leave the session.
   * This function MUST be called seconds before the sessions ends.
   */
  private showConfirm(): void {
    const timeLapsedOrigin = new Date().getTime();
    // TODO: i18n captions
    const result = confirm('You want to continue logged?');
    const timeLapsedFinal = new Date().getTime();
    this.execute(timeLapsedOrigin, timeLapsedFinal, result);
  }

  /**
   * Executes the user option if not yet into timeout
   * @param timeLapsedOrigin milliseconds where the confirm dialog starts
   * @param timeLapsedFinal milliseconds where the confirm dialog ends
   * @param result confirm dialog result
   */
  private execute(timeLapsedOrigin: number, timeLapsedFinal: number, result: any): void {
    if (timeLapsedFinal - timeLapsedOrigin > this.adviceTime * 1000) {
      // TODO: i18n captions
      alert('Timed Out!');
      this.logout();
    } else {
      if (result) {
        this.extendSession();
      } else {
        this.logout();
      }
    }
  }

  /**
   * Extends the session and restarts the counter
   */
  private extendSession(): void {
    // TODO: get token from store
    this.loginService.login();
    this.reset();
    this.start();
  }

  /**
   * Forces logout (not saved changes will be lost)
   */
  private logout(): void {
    // TODO: remove touched/dirty flag from store
    this.loginService.logout();
  }
}
