import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueformComponent } from './valueform.component';

describe('ValueformComponent', () => {
  let component: ValueformComponent;
  let fixture: ComponentFixture<ValueformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
