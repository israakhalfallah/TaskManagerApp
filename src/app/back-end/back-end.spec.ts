import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEnd } from './back-end';

describe('BackEnd', () => {
  let component: BackEnd;
  let fixture: ComponentFixture<BackEnd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackEnd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackEnd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
