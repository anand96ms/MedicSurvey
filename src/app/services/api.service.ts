import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {
private url = 'http://demo.vitaminpacks.com/rest/APIVP/advisor?gender=M&section=2&page=1';
  constructor(private _http: Http) { }

getData(){
   
      return this._http.get(this.url)
              .map(this.extractData)
              .catch(this.handleError);
  }

private extractData(res: Response) {
    
    return res.json();
  }

private handleError (error: Response | any) {
    return Observable.throw(error);
  }
}
