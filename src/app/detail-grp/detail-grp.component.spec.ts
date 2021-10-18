import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGrpComponent } from './detail-grp.component';

describe('DetailGrpComponent', () => {
  let component: DetailGrpComponent;
  let fixture: ComponentFixture<DetailGrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailGrpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
