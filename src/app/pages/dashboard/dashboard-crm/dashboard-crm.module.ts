import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardCrmRoutingModule } from './dashboard-crm-routing.module';
import { DashboardCrmComponent } from './dashboard-crm.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardCrmRoutingModule,
    SharedModule
  ],
  declarations: [DashboardCrmComponent]
})
export class DashboardCrmModule { }
