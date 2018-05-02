import { API_ENDPOINT } from '../constants/constants';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CheckDomainService {
  private UNAVAILABLE_PREFIX = 'unavailable__'



  constructor(private http: HttpClient) { }

  checkDomains(name: string) {
    // console.log('will checkDomains() for name', name)
    return this.httpCheckIfNecessary(name, `https://${name}.com/`,
      response => this.setDomainUnavailable(name),
      err => {
        // console.error(err.status, `https://${name}.com/`);
        if (err.status === 0) {
          this.httpCheck(name, `http://${name}.com/`,
            response => this.setDomainUnavailable(name),
            err2 => {
              // console.error(err.status, `https://${name}.com/`);
              if (err2.status === 0) {
                // console.log('Available:', `http://${name}.com/` );
                this.checkDomainsES(name);
              } else {
                this.setDomainUnavailable(name)
              }
            },
            () => ('alles gute')
          )
        } else {
          this.setDomainUnavailable(name)
        }
      },
      () => ('alles gute')
    );
  }

  checkDomainsES(name: string) {
    return this.httpCheck(name, `https://${name}.es/`,
      response => this.setDomainUnavailable(name),
      err => {
        // console.error(err.status, `https://${name}.es/`);
        if (err.status === 0) {
          this.httpCheck(name, `http://${name}.es/`,
            response => this.setDomainUnavailable(name),
            err2 => {
              // console.error(err.status, `https://${name}.com/`);
              if (err2.status === 0) {
                console.log('IsAvailable:', `http://${name}.es/` )
              } else {
                this.setDomainUnavailable(name)
              }
            },
            () => ('alles gute')
          )
        } else {
          this.setDomainUnavailable(name)
        }
      },
      () => ('alles gute')
    );
  }

  private httpCheckIfNecessary(name: string, url: string, respCallback, errCallback, otherCallback) {
    if ( this.notUnavail(name) ) {
      return
    }
    return this.httpCheck(name, url, respCallback, errCallback, otherCallback)
  }

  private httpCheck(nameIgnored, url: string, respCallback, errCallback, otherCallback) {
    // console.log('httpCheck url:', url)
    return this.http.get(url, { responseType: 'text' }).subscribe(respCallback, errCallback, otherCallback)
  }

  private notUnavail(name: string) {
    let unavail = window.localStorage.getItem(this.UNAVAILABLE_PREFIX + name)
    if ( unavail ) {
      // console.log('name not available (from cache): ', name)
    }
    return unavail
  }

  private setDomainUnavailable(name: string) {
    // console.log('setDomainUnavailable: ', name)
    window.localStorage.setItem(this.UNAVAILABLE_PREFIX + name, 'true')
  }
}
