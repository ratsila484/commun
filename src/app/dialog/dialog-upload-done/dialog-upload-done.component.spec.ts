import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUploadDoneComponent } from './dialog-upload-done.component';

describe('DialogUploadDoneComponent', () => {
  let component: DialogUploadDoneComponent;
  let fixture: ComponentFixture<DialogUploadDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogUploadDoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUploadDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
