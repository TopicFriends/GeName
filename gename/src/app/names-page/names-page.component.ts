import { Component, OnInit } from '@angular/core';
import {NameGenService} from '../core/name-gen.service'
import {CheckDomainService} from "../core/check-domain.service";

@Component({
  selector: 'app-names-page',
  templateUrl: './names-page.component.html',
  styleUrls: ['./names-page.component.css']
})
export class NamesPageComponent implements OnInit {

  constructor(
    public nameGenService: NameGenService,
    public checkDomainService: CheckDomainService
  ) { }

  ngOnInit() {
    //this.checkDomainService.checkDomains()
  }
/*
  doTheCheck() {
    this.checkDomainService.checkDomains('google').subscribe(
      response => console.log(response),
      err => console.error(err.status),
      () => ('alles gute')
    );

  }*/

}
