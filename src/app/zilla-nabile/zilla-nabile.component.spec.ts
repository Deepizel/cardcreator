import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZillaNabileComponent } from './zilla-nabile.component';

describe('ZillaNabileComponent', () => {
  let component: ZillaNabileComponent;
  let fixture: ComponentFixture<ZillaNabileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZillaNabileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZillaNabileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
