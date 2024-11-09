import { Routes } from '@angular/router';
import { AddReminderComponent } from './components/add-reminder/add-reminder.component';
import { PendingRemindersComponent } from './components/pending-reminders/pending-reminders.component';
import { ArchivedRemindersComponent } from './components/archived-reminders/archived-reminders.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/add-reminder', pathMatch: 'full' },
  { path: 'add-reminder', component: AddReminderComponent },
  { path: 'reminders-list', component: PendingRemindersComponent },
  { path: 'archived-reminders-list', component: ArchivedRemindersComponent },
  { path: '**', redirectTo: '/dashboard' }
];
