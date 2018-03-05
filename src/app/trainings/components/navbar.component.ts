import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Plan } from '../models/trainings.models';

@Component({
  selector: 'navbar',
  styleUrls: ['../../app.component.css'],
  template: `
    <nav>
        <span>Choose your training program:</span> 
        <select #x (change)='onChoose(x.value)'>
            <option 
            *ngFor='let plan of plans'
            [value]='plan.title'>
                {{ plan.title }}
            </option>
        </select>
    </nav>
  `
})
export class NavbarComponent { 
    @Input()
    chosenPlan: Plan;
    @Input()
    plans: Plan[]

    @Output()
    choose: EventEmitter<any> = new EventEmitter();

    onChoose(chosen){
        this.choose.emit(this.chosenPlan = chosen);
    }

 }