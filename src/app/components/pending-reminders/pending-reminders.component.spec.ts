import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingRemindersComponent } from './pending-reminders.component';

describe('PendingRemindersComponent', () => {
  let component: PendingRemindersComponent;
  let fixture: ComponentFixture<PendingRemindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingRemindersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
