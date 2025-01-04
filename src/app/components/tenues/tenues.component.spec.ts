import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenuesComponent } from './tenues.component';

describe('TenuesComponent', () => {
  let component: TenuesComponent;
  let fixture: ComponentFixture<TenuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
