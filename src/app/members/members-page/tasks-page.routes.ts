import { Routes } from '@angular/router';

export const MEMBERS_PAGE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./members-page').then(m => m.MembersPage),
  },
];
