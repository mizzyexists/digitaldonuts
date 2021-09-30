import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tiltSettings = {
    scale: 1.1,
    speed: 8000,
    max: 35,
    perspective: 600,
    transition: true,
    "full-page-listening": true,
    "mouse-event-element": '#main-content',
    glare: true,
    "max-glare": 1,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
