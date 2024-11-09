import { Injectable } from '@angular/core';
import { Reminder } from '../model/reminder.model';

@Injectable({
  providedIn: 'root'
})
export class ReminderStorageService {
  private storageKey = 'reminders';

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  }

  saveReminders(reminders: Reminder[]): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(this.storageKey, JSON.stringify(reminders));
    }
  }

  loadReminders(): Reminder[] {
    if (this.isLocalStorageAvailable()) {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    }
    return [];
  }

  clearReminders(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(this.storageKey);
    }
  }
}
