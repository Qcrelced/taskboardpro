import {
  Component,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { TaskService, TaskItem } from '../../core/services/task';
import { Members } from '../../core/services/members';
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
  private memberService = inject(Members);
  
  tasks$ = this.taskService.tasks$;
  members$ = this.memberService.members$;

  @ViewChild('highlightContainer', { read: ViewContainerRef })
  highlightContainer!: ViewContainerRef;
  @ViewChild('editContainer', { read: ViewContainerRef })
  editContainer!: ViewContainerRef;

  addTask(title: string, memberId: string) {
    if (title.trim()) {
      const id = memberId ? parseInt(memberId, 10) : undefined;
      this.taskService.addTask(title, id);
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