import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardTaskRoutingModule } from './board-task-routing.module';
import { BoardTaskComponent } from './board-task.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BoardTaskRoutingModule,
    SharedModule
  ],
  declarations: [BoardTaskComponent]
})
export class BoardTaskModule { }
