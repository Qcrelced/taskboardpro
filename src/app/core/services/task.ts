import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface TaskItem {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: TaskItem[] = [
  ];

  private tasksSubject = new BehaviorSubject<TaskItem[]>(this.tasks);
  tasks$ = this.tasksSubject.asObservable();

  addTask(title: string): void {
    const newTask: TaskItem = { 
      id: Date.now(), 
      title,
      completed: false 
    };
    this.tasks.push(newTask);
    this.tasksSubject.next(this.tasks);
  }

  deleteTask(id: number): void {
    const updatedTasks = this.tasksSubject.value.filter(
      task => task.id !== id
    );

    this.tasksSubject.next(updatedTasks);
  }

  toggleTask(id: number): void {
    const updatedTasks = this.tasksSubject.value.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );
    this.tasksSubject.next(updatedTasks);
  }

}
