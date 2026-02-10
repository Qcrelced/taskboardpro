import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService, TaskItem } from '../../core/services/task';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-edit.html', // ✅ template externe
  styleUrls: ['./task-edit.css'], // optionnel : séparer le CSS
})
export class TaskEdit {
  @Input() task!: TaskItem;
  @Input() container!: ViewContainerRef;
  private taskService = inject(TaskService);

  title!: string;

  ngOnInit() {
    this.title = this.task.title; // copie locale
  }

  save() {
    const trimmedTitle = this.title.trim();
    if (!trimmedTitle) return;

    const updatedTasks = this.taskService['tasksSubject'].value.map(t =>
      t.id === this.task.id ? { ...t, title: trimmedTitle } : t
    );
    this.taskService['tasksSubject'].next(updatedTasks);

    // Fermer le composant après enregistrement
    if (this.container) this.container.clear();
  }

  cancel() {
    // Fermer le composant sans enregistrer
    if (this.container) this.container.clear();
  }
}
