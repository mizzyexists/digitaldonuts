import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Web3Service } from 'src/app/services/web3.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuOpened: any = false;
  menuClass: any = 'collapsed';
  walletButton: any = "Connect Wallet";
  ethAccount: any;
  
  constructor(
    private toastService: HotToastService,
    private web3Service: Web3Service
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

  async connectWallet(){
    (await this.web3Service.initializeWeb3()).subscribe((res:any) => {
      this.ethAccount = res;
      this.walletButton = "..." + this.ethAccount.substring(35, 42);
    });
  }

}
