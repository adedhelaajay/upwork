import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideInNavComponent } from './slide-in-nav.component';

describe('SlideInNavComponent', () => {
  let component: SlideInNavComponent;
  let fixture: ComponentFixture<SlideInNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideInNavComponent]
    });
    fixture = TestBed.createComponent(SlideInNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
