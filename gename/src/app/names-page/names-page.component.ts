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
    private checkDomainService: CheckDomainService
  ) { }

  ngOnInit() {
    this.checkDomainService.checkDomains();
  }

}
