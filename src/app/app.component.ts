import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { SampleService } from './sample.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  userMail: object;
  public detts = [];
  dets : [{
    name: string,
    age : number,
    id : number
}];
  constructor(private _sampleService: SampleService) { }

  ngOnInit() {
    this.gobtnapp();
  }

  gobtnapp() {
    //console.log('Hi');
    // this.userMail = this._sampleService.gobtn();
    this._sampleService.gobtn().subscribe(
      data => {
        console.log(data);
        this.userMail = data;
        //this.detts.push(data);
        //this.detss = data.toLocaleString();
      });
  }
}
