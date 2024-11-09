import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReminderService } from '../../services/reminder.service';
import { Reminder } from '../../model/reminder.model';
import { v4 as uuidv4 } from 'uuid'; 

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-reminder',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-reminder.component.html',
  styleUrls: ['./add-reminder.component.scss'],
})
export class AddReminderComponent {
  reminderForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reminderService: ReminderService
  ) {
    this.reminderForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      priority: ['medium', Validators.required]
    });
  }

  onSubmit() {
    if (this.reminderForm.valid) {
      const newReminder: Reminder = {
        id: uuidv4(),  
        ...this.reminderForm.value,
        isCompleted: false,
        isArchived: false
      };

      this.reminderService.addReminder(newReminder); 
      this.reminderForm.reset();  
    } else {
      console.log('Form is invalid');
    }
  }
}
