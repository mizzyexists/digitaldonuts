import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private wowService: NgwWowService) {
  }

  ngOnInit(): void {
    this.wowService.init();
  }

}
