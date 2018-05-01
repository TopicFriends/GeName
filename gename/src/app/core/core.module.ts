import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NameGenService} from './name-gen.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    NameGenService,
  ]
})
export class CoreModule { }
