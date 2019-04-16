import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeComponent } from './update-le.component';

describe('UpdateLeComponent', () => {
  let component: UpdateLeComponent;
  let fixture: ComponentFixture<UpdateLeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
