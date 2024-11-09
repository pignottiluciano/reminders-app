import { Component, inject, Signal, computed } from '@angular/core';
import { ReminderService } from '../../services/reminder.service';
import { Reminder } from '../../model/reminder.model';
import { ReminderItemComponent } from '../reminder-item/reminder-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pending-reminders',
  templateUrl: './pending-reminders.component.html',
  styleUrls: ['./pending-reminders.component.scss'],
  standalone: true,
  imports: [ReminderItemComponent, CommonModule]
})
export class PendingRemindersComponent {
  reminderService = inject(ReminderService);
  reminders = this.reminderService.getReminders();
  activeReminders: Signal<Reminder[]> = computed(() => 
    this.reminders().filter(reminder => !reminder.isCompleted)
  );

  changeCompleteReminder(reminderId: string): void {
    this.reminderService.changeCompleteReminder(reminderId);
  }

  deleteReminder(reminderId: string): void {
    this.reminderService.deleteReminder(reminderId);
  }
}
