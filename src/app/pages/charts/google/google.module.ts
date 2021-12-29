import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleRoutingModule } from './google-routing.module';
import { GoogleComponent } from './google.component';
import {SharedModule} from '../../../shared/shared.module';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';

@NgModule({
  imports: [
    CommonModule,
    GoogleRoutingModule,
    SharedModule,
    Ng2GoogleChartsModule
  ],
  declarations: [GoogleComponent]
})
export class GoogleModule { }
