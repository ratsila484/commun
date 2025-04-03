import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commun2Component } from './commun2.component';

describe('Commun2Component', () => {
  let component: Commun2Component;
  let fixture: ComponentFixture<Commun2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Commun2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Commun2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
