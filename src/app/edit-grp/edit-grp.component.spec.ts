import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGrpComponent } from './edit-grp.component';

describe('EditGrpComponent', () => {
  let component: EditGrpComponent;
  let fixture: ComponentFixture<EditGrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGrpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
