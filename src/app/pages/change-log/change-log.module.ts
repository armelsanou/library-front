import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeLogRoutingModule } from './change-log-routing.module';
import { ChangeLogComponent } from './change-log.component';
import {SharedModule} from '../../shared/shared.module';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  imports: [
    CommonModule,
    ChangeLogRoutingModule,
    SharedModule,
    ScrollToModule.forRoot()
  ],
  declarations: [ChangeLogComponent]
})
export class ChangeLogModule { }
