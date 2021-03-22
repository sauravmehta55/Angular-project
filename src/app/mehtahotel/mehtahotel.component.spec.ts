import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MehtahotelComponent } from './mehtahotel.component';

describe('MehtahotelComponent', () => {
  let component: MehtahotelComponent;
  let fixture: ComponentFixture<MehtahotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MehtahotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MehtahotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
