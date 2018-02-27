import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HabitsModule } from './habits/habits.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HabitsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
