import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.css']
})
export class PingComponent implements OnInit {

  constructor(private readonly timerService: TimerService) { }

  ngOnInit() {
  }

  login() {
    this.timerService.start(10);
  }

}
