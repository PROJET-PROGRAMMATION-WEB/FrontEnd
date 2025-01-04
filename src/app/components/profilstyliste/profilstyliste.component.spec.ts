import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilstylisteComponent } from './profilstyliste.component';

describe('ProfilstylisteComponent', () => {
  let component: ProfilstylisteComponent;
  let fixture: ComponentFixture<ProfilstylisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilstylisteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilstylisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
