import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRadiobuttonComponent } from './card-radiobutton.component';

describe('CardRadiobuttonComponent', () => {
  let component: CardRadiobuttonComponent;
  let fixture: ComponentFixture<CardRadiobuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRadiobuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
