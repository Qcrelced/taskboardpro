import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { memberItem, Members } from './members';

export interface TaskItem {
  id: number;
  title: string;
  completed: boolean;
  owner?: memberItem; 
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private memberService = inject(Members);
  private tasksSubject = new BehaviorSubject<TaskItem[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  addTask(title: string, ownerId?: number): void {
    let owner: memberItem | undefined;
    if (ownerId) {
      this.memberService.members$.subscribe(members => {
        owner = members.find(m => m.id === ownerId);
      }).unsubscribe();
    }
    const newTask: TaskItem = { 
      id: Date.now(), 
      title,
      completed: false,
      owner: owner
    };
    this.tasksSubject.next([...this.tasksSubject.value, newTask]);
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