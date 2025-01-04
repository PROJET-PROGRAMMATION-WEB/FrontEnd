import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardListComponent } from '../card-list/card-list.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-acceuil',
  imports: [CardListComponent,NavbarComponent],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {

}
