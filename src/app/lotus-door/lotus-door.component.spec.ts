import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotusDoorComponent } from './lotus-door.component';

describe('LotusDoorComponent', () => {
  let component: LotusDoorComponent;
  let fixture: ComponentFixture<LotusDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotusDoorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LotusDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
