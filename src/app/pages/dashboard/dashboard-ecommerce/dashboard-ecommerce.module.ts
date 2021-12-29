import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardEcommerceRoutingModule } from './dashboard-ecommerce-routing.module';
import { DashboardEcommerceComponent } from './dashboard-ecommerce.component';
import {ShadowCss} from '@angular/compiler/src/shadow_css';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardEcommerceRoutingModule,
    SharedModule
  ],
  declarations: [DashboardEcommerceComponent]
})
export class DashboardEcommerceModule { }
