import { Injectable } from '@angular/core';
import Web3 from 'web3';
declare const window: any;

@Injectable({
  providedIn: 'root'
})
export class ContractopsService {
  window:any;
  constructor() { }

  async localTest(){
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable;
    console.log(web3);
  }
 }
