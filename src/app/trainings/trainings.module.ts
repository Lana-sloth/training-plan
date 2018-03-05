import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TrainingsComponent } from './trainings.component';
import { NavbarComponent } from './components/navbar.component';
import { WorkoutComponent } from './components/workout.component';

@NgModule({
  declarations: [
    TrainingsComponent,
    NavbarComponent,
    WorkoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [TrainingsComponent]
})
export class TrainingsModule { }
