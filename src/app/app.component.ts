import { Component } from '@angular/core';

import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = null;
  success=false;
  constructor(private _api : ApiService){
    this.getData();
  }

  getData(){
    this._api.getData()
    .subscribe((response) => {
    this.data = response.data;
    this.success=response.success
    })

  }
}
