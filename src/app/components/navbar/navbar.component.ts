import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuOpened: any = false;
  menuClass: any = 'collapsed';

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    if(this.menuOpened == false){
      this.menuOpened = true;
      this.menuClass = "not-collapsed";
    }
    else if(this.menuOpened == true){
      this.menuOpened = false;
      this.menuClass = "collapsed";
    }
  }

}
