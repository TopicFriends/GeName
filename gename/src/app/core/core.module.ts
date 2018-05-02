import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameGenService } from './name-gen.service'
import { CheckDomainService} from './check-domain.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  ],
  providers: [
    NameGenService,
    CheckDomainService
  ]
})
export class CoreModule { }
