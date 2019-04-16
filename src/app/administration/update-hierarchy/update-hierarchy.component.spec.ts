import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHierarchyComponent } from './update-hierarchy.component';

describe('UpdateHierarchyComponent', () => {
  let component: UpdateHierarchyComponent;
  let fixture: ComponentFixture<UpdateHierarchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHierarchyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
