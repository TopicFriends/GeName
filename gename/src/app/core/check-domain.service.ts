import { API_ENDPOINT } from '../constants/constants';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CheckDomainService {



  constructor(private http:HttpClient) { }

  checkDomains(name: string){
    //console.log(this.http.get(API_ENDPOINT));
    return this.http.get(`https://www.${name}.com/`)
  }

}
