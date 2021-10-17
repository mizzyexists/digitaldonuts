import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-locked',
  templateUrl: './locked.component.html',
  styleUrls: ['./locked.component.scss']
})
export class LockedComponent implements OnInit {
  accessCode:any = '';
  constructor(private toastService: HotToastService) { }

  ngOnInit(): void {

  }

  unlock(){
    if(this.accessCode == "KEYISKEY"){
      window.localStorage.setItem("unlocked", "true");
      this.toastService.success("Successful Authentication");
      setTimeout(() =>{ window.location.reload() }, 2000);
    }
    else{
      this.toastService.error("Invalid Access Code");
      window.localStorage.removeItem("unlocked");
    }
  }

}
