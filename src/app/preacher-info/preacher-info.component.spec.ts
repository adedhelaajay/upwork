import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreacherInfoComponent } from './preacher-info.component';

describe('PreacherInfoComponent', () => {
  let component: PreacherInfoComponent;
  let fixture: ComponentFixture<PreacherInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreacherInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreacherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
