import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuOpened: any = false;
  menuClass: any = 'collapsed';

  constructor(
    private toastService: HotToastService
  ) { }

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

  walletConnect(){
    this.toastService.error("Sorry!<br/>We can't connect to wallets just yet!<br/>Come back soon and try again.");
  }

}
