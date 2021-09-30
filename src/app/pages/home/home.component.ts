import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tiltSettings = {
    scale: 1.1,
    reverse: true,
    speed: 8000,
    max: 35,
    perspective: 800,
    transition: true,
    glare: true,
    "full-page-listening": false,
    "max-glare": 1,
    gyroscope: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
