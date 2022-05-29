import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkGestComponent } from './work-gest.component';

describe('WorkGestComponent', () => {
  let component: WorkGestComponent;
  let fixture: ComponentFixture<WorkGestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkGestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkGestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
