import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Reminder } from '../../model/reminder.model'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reminder-item',
  templateUrl: './reminder-item.component.html',
  styleUrls: ['./reminder-item.component.scss'],
  standalone: true,
  imports:[CommonModule]
})
export class ReminderItemComponent {
  @Input() reminder!: Reminder;
  @Output() delete = new EventEmitter<string>();
  @Output() complete = new EventEmitter<string>();
  @Output() archive = new EventEmitter<string>();

  onDelete() {
    this.delete.emit(this.reminder.id);
  }

  onComplete() {
    this.complete.emit(this.reminder.id);
  }

  onArchive() {
    this.archive.emit(this.reminder.id);
  }
}
