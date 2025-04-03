import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePrivateFileComponent } from './delete-private-file.component';

describe('DeletePrivateFileComponent', () => {
  let component: DeletePrivateFileComponent;
  let fixture: ComponentFixture<DeletePrivateFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePrivateFileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePrivateFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
