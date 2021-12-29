import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationsRoutingModule } from './animations-routing.module';
import { AnimationsComponent } from './animations.component';
import {SharedModule} from '../../shared/shared.module';
import {AnimatorModule} from 'css-animator';

@NgModule({
  imports: [
    CommonModule,
    AnimationsRoutingModule,
    SharedModule,
    AnimatorModule
  ],
  declarations: [AnimationsComponent]
})
export class AnimationsModule { }
