import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCrudOperationComponent } from './user-crud-operation.component';

describe('UserCrudOperationComponent', () => {
  let component: UserCrudOperationComponent;
  let fixture: ComponentFixture<UserCrudOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCrudOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCrudOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
