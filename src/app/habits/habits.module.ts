import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitsComponent } from './habits.component';
import { NavbarComponent } from './components/navbar.component';

@NgModule({
  declarations: [
    HabitsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [HabitsComponent]
})
export class HabitsModule { }
