import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { ReminderService } from '../../services/reminder.service';
import { Reminder } from '../../model/reminder.model';
import { ReminderItemComponent } from '../reminder-item/reminder-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-archived-reminders',
  standalone: true,
  imports: [ReminderItemComponent, CommonModule],
  templateUrl: './archived-reminders.component.html',
  styleUrl: './archived-reminders.component.scss'
})

export class ArchivedRemindersComponent {
  reminderService = inject(ReminderService);
  reminders = this.reminderService.getArchivedReminders();
  archivedReminders: Signal<Reminder[]> = computed(() => 
    this.reminders().filter(reminder => reminder.isCompleted)
  );

  changeCompleteReminder(reminderId: string): void {
    this.reminderService.changeCompleteReminder(reminderId);
  }

  deleteReminder(reminderId: string): void {
    this.reminderService.deleteReminder(reminderId);
  }
}
