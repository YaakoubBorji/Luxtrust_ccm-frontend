import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionFacadeComponent } from './position-facade.component';

describe('PositionFacadeComponent', () => {
  let component: PositionFacadeComponent;
  let fixture: ComponentFixture<PositionFacadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionFacadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionFacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
