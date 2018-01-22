import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifiedComponent } from './notified.component';

describe('NotifiedComponent', () => {
  let component: NotifiedComponent;
  let fixture: ComponentFixture<NotifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
