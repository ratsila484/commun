import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadateSuccefulComponent } from './upadate-succeful.component';

describe('UpadateSuccefulComponent', () => {
  let component: UpadateSuccefulComponent;
  let fixture: ComponentFixture<UpadateSuccefulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpadateSuccefulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpadateSuccefulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
