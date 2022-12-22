import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexComponent } from './viewex.component';

describe('ViewexComponent', () => {
  let component: ViewexComponent;
  let fixture: ComponentFixture<ViewexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
