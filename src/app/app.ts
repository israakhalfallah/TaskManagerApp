import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from "./task/task";
import { Menu } from "./menu/menu";
import { FrontEnd } from "./front-end/front-end";
import { BackEnd } from "./back-end/back-end";
import { LowerCasePipe, TitleCasePipe, UpperCasePipe ,DatePipe, DecimalPipe, CurrencyPipe, PercentPipe} from '@angular/common';
import { TaskService } from './task-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Task, Menu, FrontEnd, BackEnd,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,DecimalPipe,CurrencyPipe,PercentPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todolist');
 i: number=0;
 tasks: any[]=[]; 
constructor(private taskService: TaskService) {}
ngOnInit() {
this.tasks = this.taskService.getTasks();
}
 
addNewTask(){
  this.tasks.push({ id:'1',title: 'New Task', done: false },)
}
deleteTask(ind:number){

  this.tasks.splice(ind,1);
}
today = new Date();
price = 1234.56;
percentage = 0.259;
}

