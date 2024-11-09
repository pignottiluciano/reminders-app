import { TestBed } from '@angular/core/testing';

import { ReminderStorageService } from './reminder-storage.service';

describe('ReminderStorageService', () => {
  let service: ReminderStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReminderStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
