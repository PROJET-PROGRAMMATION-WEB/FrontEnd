import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondescommandesComponent } from './gestiondescommandes.component';

describe('GestiondescommandesComponent', () => {
  let component: GestiondescommandesComponent;
  let fixture: ComponentFixture<GestiondescommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestiondescommandesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestiondescommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
