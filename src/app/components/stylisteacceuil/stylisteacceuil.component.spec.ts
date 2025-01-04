import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylisteacceuilComponent } from './stylisteacceuil.component';

describe('StylisteacceuilComponent', () => {
  let component: StylisteacceuilComponent;
  let fixture: ComponentFixture<StylisteacceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StylisteacceuilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylisteacceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
