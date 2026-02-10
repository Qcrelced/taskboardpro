import { Routes } from '@angular/router';

export const TASKS_PAGE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./tasks-page').then(m => m.TasksPage),
  },
];
