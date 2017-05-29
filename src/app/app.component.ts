import { Component } from '@angular/core';

import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data = null;
  constructor(private _api : ApiService){
    this.getData();
  }

  getData(){
    this._api.getData()
    .subscribe((data) => {
      console.log(data);
      this.data = data.data;
    })

  }
}
