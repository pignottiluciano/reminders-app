import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedRemindersComponent } from './archived-reminders.component';

describe('ArchivedRemindersComponent', () => {
  let component: ArchivedRemindersComponent;
  let fixture: ComponentFixture<ArchivedRemindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivedRemindersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivedRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
