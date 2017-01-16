import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";


@Injectable()
export class CurrentserviceService {

  private searchUrl: string;
  constructor(private http: Http){

  }

  getdata(){
    this.searchUrl = 'https://currentcontests.herokuapp.com';
    return this.http.get(this.searchUrl).
            map(res => res.json());
  }


}
