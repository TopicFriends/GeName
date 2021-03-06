import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameGenService } from './name-gen.service'
import { CheckDomainService} from './check-domain.service';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
  ],
  providers: [
    NameGenService,
    CheckDomainService,
  ]
})
export class CoreModule { }
