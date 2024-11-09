import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddReminderComponent } from './components/add-reminder/add-reminder.component';

export const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add-reminder', component: AddReminderComponent },
];
