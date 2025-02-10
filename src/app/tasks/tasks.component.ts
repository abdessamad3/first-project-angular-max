import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './task/new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksServices } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required : true}) name!: string;
  isAddingTask = false;

  constructor(private tasksServices: TasksServices){}



  get selectedtasksUserId (){
    return this.tasksServices.getUserTasks(this.userId);
  }

  onCompleteTask(id : string){
  }
onStartAddTask(){
  this.isAddingTask = true;
}
onCloseAddTask(){
  this.isAddingTask = false;
}

}
