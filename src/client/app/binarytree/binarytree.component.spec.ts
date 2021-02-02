import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinarytreeComponent } from './binarytree.component';

describe('BinarytreeComponent', () => {
  let component: BinarytreeComponent;
  let fixture: ComponentFixture<BinarytreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinarytreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinarytreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
