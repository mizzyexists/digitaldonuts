import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';
import { Web3Service } from './services/web3.service';
import { Abi } from './models/abi';
declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  loading: any = true;
  hasLoaded: any;
  walletButton: any = "Connect Wallet";
  ethAccount: any;
  abi: any = Abi;
  abiData = this.abi.abiData;
  timestamp: any;
  mintFee: any = 6000000000 * 10000000;
  tokenId: any;
  tokenCount: any;
  ownedTokens: any;
  locked: any = true;
  checkLocked: any;
  contractAddress = "0x7Cb579674D7C135490eDBA44c109227F77c45653";
  constructor(private web3Service: Web3Service){
  }

  ngOnInit(){
    this.checkLocked = window.localStorage.getItem("unlocked");
    if(this.checkLocked == 'true'){
      this.locked = false;
    }
    else{
      this.locked = true;
    }
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const donutContract = new web3.eth.Contract(this.abiData, this.contractAddress);
    // donutContract.methods.totalToken().call().then((res: any) => {
    //   this.tokenId = [res];
    //   this.tokenCount = this.tokenId[0];
    // });
    // web3.eth.requestAccounts().then((res:any) => {
    //   donutContract.methods.walletOfOwner(res[0]).call().then((res:any) => {
    //     this.ownedTokens = res;
    //   })
    // });
    this.hasLoaded = window.localStorage.getItem("hasLoaded");
    if(!this.hasLoaded || this.hasLoaded == 'false'){
      this.loading = true;
      // setTimeout(() =>{ this.loading = false }, 9000);
      // window.localStorage.setItem('hasLoaded', 'true');
    }
    else{
      this.loading = false;
    }
  }

  async mintDonut(){
    console.log("STARTING MINT...");
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const donutContract = new web3.eth.Contract(this.abiData, this.contractAddress);
    (await this.web3Service.initializeWeb3()).subscribe((res:any) => {
      this.ethAccount = res;
      this.timestamp = Math.floor(Date.now() / 1000);
      donutContract.methods.totalToken().call().then((res: any) => {
        this.tokenId = [res[0]];
        this.tokenId[0] = parseInt(this.tokenId) + 1;
        console.log(this.tokenId);
        donutContract.methods.mint(this.tokenId, this.timestamp).send({
          from: this.ethAccount,
          value: this.mintFee},
          (error: any, transactionHash: any) => {
            if (error) {
              console.log('In Error');
              console.log(error);
            }
            else{
              console.log(transactionHash);
            }
          })
      });
    });
  }

  async unpause(){
    console.log("Un-pausing contract...");
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const donutContract = new web3.eth.Contract(this.abiData, this.contractAddress);
    (await this.web3Service.initializeWeb3()).subscribe((res:any) => {
      this.ethAccount = res;
      donutContract.methods.setPause(false).send({
        from: this.ethAccount},
        (error: any, transactionHash: any) => {
          if (error) {
            console.log('In Error');
            console.log(error);
          }
          else{
            console.log(transactionHash);
          }
        })
    });
  }

  async pause(){
    console.log("Pausing contract...");
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const donutContract = new web3.eth.Contract(this.abiData, this.contractAddress);
    (await this.web3Service.initializeWeb3()).subscribe((res:any) => {
      this.ethAccount = res;
      donutContract.methods.setPause(true).send({
        from: this.ethAccount},
        (error: any, transactionHash: any) => {
          if (error) {
            console.log('In Error');
            console.log(error);
          }
          else{
            console.log(transactionHash);
          }
        })
    });
  }

  async payout(){
    console.log("Paying out eth to founders...");
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const donutContract = new web3.eth.Contract(this.abiData, this.contractAddress);
    (await this.web3Service.initializeWeb3()).subscribe((res:any) => {
      this.ethAccount = res;
      donutContract.methods.withdrawAll().send({
        from: this.ethAccount},
        (error: any, transactionHash: any) => {
          if (error) {
            console.log('In Error');
            console.log(error);
          }
          else{
            console.log(transactionHash);
          }
        })
    });
  }
}
