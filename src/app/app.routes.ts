import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.routes').then(m => m.HOME_ROUTES),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.routes').then(m => m.ABOUT_ROUTES),
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./tasks/tasks-page/tasks-page.routes')
        .then(m => m.TASKS_PAGE_ROUTES),
  },
  {
    path: 'members',
    loadChildren: () =>
      import('./members/members-page/tasks-page.routes')
        .then(m => m.MEMBERS_PAGE_ROUTES),
  },
];
