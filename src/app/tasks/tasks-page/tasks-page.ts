import {
  Component,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { TaskService, TaskItem } from '../../core/services/task';
import { TaskHighlight } from '../task-highlight/task-highlight';
import { TaskEdit } from '../task-edit/task-edit';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.css',
})
export class TasksPage {
  private taskService = inject(TaskService);
  tasks$ = this.taskService.tasks$;

  @ViewChild('highlightContainer', { read: ViewContainerRef })
  highlightContainer!: ViewContainerRef;
  @ViewChild('editContainer', { read: ViewContainerRef })
  editContainer!: ViewContainerRef;

  addTask(title: string) {
    if (title.trim()) {
      this.taskService.addTask(title);
    }
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  toggleTask(id: number) {
    this.taskService.toggleTask(id);
  }

  highlight(task: TaskItem) {
    if (!this.highlightContainer) return;
    this.highlightContainer.clear();
    const ref = this.highlightContainer.createComponent(TaskHighlight);
    ref.instance.title = task.title;
  }

  editTask(task: TaskItem) {
    if (!this.editContainer) return;
    this.editContainer.clear(); // efface tout contenu précédent
    const ref = this.editContainer.createComponent(TaskEdit);
    ref.instance.task = task;
    ref.instance.container = this.editContainer; // permet au composant de se fermer
  }
}
