import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FikirTulaComponent } from './fikir-tula.component';

describe('FikirTulaComponent', () => {
  let component: FikirTulaComponent;
  let fixture: ComponentFixture<FikirTulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FikirTulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FikirTulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
