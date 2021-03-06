import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TrainingsComponent } from './trainings.component';
import { NavbarComponent } from './components/navbar.component';
import { WorkoutComponent } from './components/workout.component';

import { TrainingsService } from './trainings.service';

@NgModule({
  declarations: [
    TrainingsComponent,
    NavbarComponent,
    WorkoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [TrainingsService],
  exports: [TrainingsComponent]
})
export class TrainingsModule { }
