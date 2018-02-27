import { Component } from '@angular/core';

@Component({
  selector: 'habits',
  styleUrls: ['../app.component.css'],
  template: `
    <div>HABITS</div>
    <div *ngFor='let habit of habits'> 
        <div>
            <button (click)='increase(habit)'>+</button>
            {{ habit.name }} : {{ habit.amount }}
        </div>
    </div>
  `
})
export class HabitsComponent {
    habits = [
        {
            name: 'coffee',
            amount: 2
        },
        {
            name: 'productivity',
            amount: 2
        },
        {
            name: 'anxiety',
            amount: 2
        }
    ]
    increase(habit){
        habit.amount ++;
    }
}
