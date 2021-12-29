import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnimationsComponent} from './animations.component';

const routes: Routes = [
  {
    path: '',
    component: AnimationsComponent,
    data: {
      breadcrumb: 'Animations',
      icon: 'icofont-maximize bg-c-yellow',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Animations',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule { }
