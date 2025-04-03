import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTypeDialogComponent } from './choose-type-dialog.component';

describe('ChooseTypeDialogComponent', () => {
  let component: ChooseTypeDialogComponent;
  let fixture: ComponentFixture<ChooseTypeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseTypeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
