import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAnswerComponent } from './write-answer.component';

describe('WriteAnswerComponent', () => {
  let component: WriteAnswerComponent;
  let fixture: ComponentFixture<WriteAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
