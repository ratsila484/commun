import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadSuccessComponent } from './download-success.component';

describe('DownloadSuccessComponent', () => {
  let component: DownloadSuccessComponent;
  let fixture: ComponentFixture<DownloadSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
