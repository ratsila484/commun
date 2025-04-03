import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadPrivateFileComponent } from './download-private-file.component';

describe('DownloadPrivateFileComponent', () => {
  let component: DownloadPrivateFileComponent;
  let fixture: ComponentFixture<DownloadPrivateFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadPrivateFileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadPrivateFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
