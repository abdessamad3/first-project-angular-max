import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task.model';
import { TasksServices } from '../../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required : true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  private tasksServices = inject(TasksServices);
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onClose(){
    this.close.emit();
  }
  onSubmit(){
    this.tasksServices.addTask({
      title : this.enteredTitle,
      summary : this.enteredSummary,
      date : this.enteredDate
    },this.userId);
    this.close.emit();
  }
}
