import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericClassRoutingModule } from './generic-class-routing.module';
import { GenericClassComponent } from './generic-class.component';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    GenericClassRoutingModule,
    SharedModule
  ],
  declarations: [GenericClassComponent]
})
export class GenericClassModule { }
