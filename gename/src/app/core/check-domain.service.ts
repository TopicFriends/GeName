import { API_ENDPOINT } from '../constants/constants';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CheckDomainService {



  constructor(private http: HttpClient) { }

  checkDomains(name: string) {
    return this.http.get(`https://${name}.com/`).subscribe(
      response => console.log('first log', response),
      err => {
        // console.error(err.status, `https://${name}.com/`);
        if (err.status === 0) {
          this.http.get(`http://${name}.com/`).subscribe(
            response => console.log('second log', response),
            err2 => {
              // console.error(err.status, `https://${name}.com/`);
              if (err2.status === 0) {
                // console.log('Available:', `http://${name}.com/` );
                this.checkDomainsES(name);
              }
            },
            () => ('alles gute')
          )
        }
      },
      () => ('alles gute')
    );
  }
  checkDomainsES(name: string) {
    return this.http.get(`https://${name}.es/`).subscribe(
      response => console.log('third log', response),
      err => {
        // console.error(err.status, `https://${name}.es/`);
        if (err.status === 0) {
          this.http.get(`http://${name}.es/`).subscribe(
            response => console.log(response),
            err2 => {
              // console.error(err.status, `https://${name}.com/`);
              if (err2.status === 0) {
                console.log('Available:', `http://${name}.es/` )
              }
            },
            () => ('alles gute')
          )
        }
      },
      () => ('alles gute')
    );
  }

}
