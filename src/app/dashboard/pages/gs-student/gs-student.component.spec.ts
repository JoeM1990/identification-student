import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsStudentComponent } from './gs-student.component';

describe('GsStudentComponent', () => {
  let component: GsStudentComponent;
  let fixture: ComponentFixture<GsStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GsStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
