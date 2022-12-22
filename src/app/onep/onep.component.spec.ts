import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepComponent } from './onep.component';

describe('OnepComponent', () => {
  let component: OnepComponent;
  let fixture: ComponentFixture<OnepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
