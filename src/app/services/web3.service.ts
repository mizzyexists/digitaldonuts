import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import Web3 from 'web3';
declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  response: any;
  constructor() { }

  async initializeWeb3(): Promise<Subject<any>>{
    let subject = new Subject();
    if (window.ethereum) {
      try {
        window.ethereum.request({ method: 'eth_requestAccounts' }).then((res: any) =>
          {
          if(res[0] && res[0] != undefined){
          subject.next(res[0]);
          }
        });
      } catch (error) {
        if(error.code == 4001){
          console.log("User Cancelled");
        }
      }
    }
    else if (window.web3) {
      console.log('We only support MetaMask');
    }
    return subject;
  }
}
