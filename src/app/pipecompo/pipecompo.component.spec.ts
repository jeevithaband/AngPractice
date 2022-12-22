import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipecompoComponent } from './pipecompo.component';

describe('PipecompoComponent', () => {
  let component: PipecompoComponent;
  let fixture: ComponentFixture<PipecompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipecompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipecompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
