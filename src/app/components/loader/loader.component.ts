import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  percentLoaded: any = 0;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() =>{ this.percentLoaded = 10 }, 1000);
    setTimeout(() =>{ this.percentLoaded = 25 }, 1500);
    setTimeout(() =>{ this.percentLoaded = 40 }, 1900);
    setTimeout(() =>{ this.percentLoaded = 76 }, 2500);
    setTimeout(() =>{ this.percentLoaded = 100 }, 3200);
    setTimeout(() =>{ window.localStorage.setItem("hasLoaded", "true")
                      window.location.reload()
                    }, 4000);

  }

}
