import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegleRespecterComponent } from './regle-respecter.component';

describe('RegleRespecterComponent', () => {
  let component: RegleRespecterComponent;
  let fixture: ComponentFixture<RegleRespecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegleRespecterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegleRespecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
