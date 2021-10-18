import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStructComponent } from './edit-struct.component';

describe('EditStructComponent', () => {
  let component: EditStructComponent;
  let fixture: ComponentFixture<EditStructComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStructComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
