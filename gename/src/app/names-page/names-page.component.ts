import { Component, OnInit } from '@angular/core';
import {NameGenService} from '../core/name-gen.service'

@Component({
  selector: 'app-names-page',
  templateUrl: './names-page.component.html',
  styleUrls: ['./names-page.component.css']
})
export class NamesPageComponent implements OnInit {

  constructor(
    public nameGenService: NameGenService
  ) { }

  ngOnInit() {
  }

}
