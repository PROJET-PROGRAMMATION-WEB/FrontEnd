import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivicommandeComponent } from './suivicommande.component';

describe('SuivicommandeComponent', () => {
  let component: SuivicommandeComponent;
  let fixture: ComponentFixture<SuivicommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuivicommandeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuivicommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
