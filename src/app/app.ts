import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from "./task/task";
import { Menu } from "./menu/menu";
import { FrontEnd } from "./front-end/front-end";
import { BackEnd } from "./back-end/back-end";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Task, Menu, FrontEnd, BackEnd],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todolist');
 
 
  tasks = [
{ id:'1',title: 'Learn Angular', done: false },
{ id:'2',title: 'Build ToDoList App', done: false },
{ id:'3', title: 'Celebrate!', done: true }
];

addNewTask(){
  this.tasks.push({ id:'1',title: 'New Task', done: false },)
}
deleteTask(ind:number){

  this.tasks.splice(ind,1)


}
}
