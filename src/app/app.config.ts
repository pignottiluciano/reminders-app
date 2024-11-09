import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddReminderComponent } from './components/add-reminder/add-reminder.component';
import { ReminderItemComponent } from './components/reminder-item/reminder-item.component';

import { appRoutes } from './app.routes';

export const appConfig = {
  providers: [
    importProvidersFrom(
      ReactiveFormsModule, 
      CommonModule,        
      RouterModule.forRoot(appRoutes)
    )
  ],
  declarations: [
    DashboardComponent,
    AddReminderComponent,
    ReminderItemComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    CommonModule,
    DashboardComponent,
    AddReminderComponent,
    ReminderItemComponent
  ]
};