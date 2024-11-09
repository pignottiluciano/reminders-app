import { Injectable, Signal, signal } from '@angular/core';
import { Reminder } from '../model/reminder.model';
import { ReminderStorageService } from './reminder-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ReminderService {
  private reminders = signal<Reminder[]>([]);

  constructor(private storageService: ReminderStorageService) {
    const loadedReminders = this.storageService.loadReminders();
    this.reminders.set(loadedReminders.length > 0 ? loadedReminders : []);
  }

  private updateStorage(): void {
    this.storageService.saveReminders(this.reminders());
  }

  getReminders(): Signal<Reminder[]> {
    return this.reminders;
  }

  getActiveReminders(): Signal<Reminder[]> {
    return signal(this.reminders().filter(reminder => !reminder.isCompleted));
  }

  getArchivedReminders(): Signal<Reminder[]> {
    return signal(this.reminders().filter(reminder => reminder.isCompleted));
  }

  addReminder(reminder: Reminder): void {
    this.reminders.set([...this.reminders(), reminder]);
    this.updateStorage();
  }

  deleteReminder(reminderId: string): void {
    this.reminders.set(this.reminders().filter(r => r.id !== reminderId));
    this.updateStorage();
  }

  updateReminder(updatedReminder: Reminder): void {
    const updatedReminders = this.reminders().map(r => r.id === updatedReminder.id ? updatedReminder : r);
    this.reminders.set(updatedReminders);
    this.updateStorage();
  }

  changeCompleteReminder(reminderId: string): void { 
    const updatedReminders = this.reminders().map(r => 
      r.id === reminderId ? { ...r, isCompleted: !r.isCompleted } : r
    );
    this.reminders.set(updatedReminders); 
    this.updateStorage();
  }
  

}
