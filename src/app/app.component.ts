import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardListComponent } from './components/card-list/card-list.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,FooterComponent,RouterLink,CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mon-projet-angular';
}
