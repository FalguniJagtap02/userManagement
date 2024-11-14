import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSecondComponent } from './task-second.component';

describe('TaskSecondComponent', () => {
  let component: TaskSecondComponent;
  let fixture: ComponentFixture<TaskSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
