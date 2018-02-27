import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitsComponent } from './habits.component';


@NgModule({
  declarations: [
    HabitsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [HabitsComponent]
})
export class HabitsModule { }
