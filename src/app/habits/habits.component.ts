import { Component } from '@angular/core';

@Component({
  selector: 'habits',
  styleUrls: ['../app.component.css'],
  template: `
    <div>{{ workout.title }}</div>
    <div>Today's routine: {{ workout.exersises[today] }}</div>
    <div></div>
  `
})
export class HabitsComponent {
    today = this.getDayOfWeek();
    getDayOfWeek(){
        return new Date().getDay() - 1;
    }
    assassin = {
        title: 'Assassin',
        exersises: [
            'High Birn / HIIT workout',
            'Rest / casual training',
            'Combat Workout',
            'High Birn / HIIT workout',
            'Rest / casual training',
            'High Birn / HIIT workout',
            'Rest / casual training'
        ]
    }
    workout = this.assassin;
}
