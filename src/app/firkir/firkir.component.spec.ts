import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirkirComponent } from './firkir.component';

describe('FirkirComponent', () => {
  let component: FirkirComponent;
  let fixture: ComponentFixture<FirkirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirkirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirkirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
