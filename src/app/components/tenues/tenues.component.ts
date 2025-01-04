import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importation du FormsModule
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-tenues',
  standalone: true, // Indique que ce composant est autonome
  imports: [CommonModule, HttpClientModule, FormsModule,NavbarComponent], // Ajoutez FormsModule ici
  templateUrl: './tenues.component.html',
  styleUrls: ['./tenues.component.css']
})
export class TenuesComponent implements OnInit {
  cards: any[] = []; // Toutes les cartes
  filteredCards: any[] = []; // Cartes filtrées

  categories: string[] = []; // Catégories disponibles
  genders: string[] = []; // Genres disponibles
  stylists: string[] = []; // Stylistes disponibles

  selectedCategory: string = ''; // Filtre par catégorie
  selectedGender: string = ''; // Filtre par genre
  selectedStylist: string = ''; // Filtre par styliste
  sortOrder: string = 'asc'; // Ordre de tri (croissant par défaut)

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('/image.json').subscribe(data => {
      this.cards = data.cards;
      this.filteredCards = [...this.cards]; // Initialiser avec toutes les cartes

      // Extraire les valeurs uniques pour les filtres
      this.categories = [...new Set(this.cards.map(card => card.categorie))];
      this.genders = [...new Set(this.cards.map(card => card.genre))];
      this.stylists = [...new Set(this.cards.map(card => card.styliste))];
    });
  }

  applyFilters(): void {
    // Filtrer par catégorie, genre et styliste
    this.filteredCards = this.cards.filter(card => {
      const matchesCategory = this.selectedCategory ? card.categorie === this.selectedCategory : true;
      const matchesGender = this.selectedGender ? card.genre === this.selectedGender : true;
      const matchesStylist = this.selectedStylist ? card.styliste === this.selectedStylist : true;
      return matchesCategory && matchesGender && matchesStylist;
    });

    // Trier après filtrage
    this.sortCards();
  }

  sortCards(): void {
    // Trier les cartes filtrées par prix
    this.filteredCards.sort((a, b) => {
      return this.sortOrder === 'asc' ? a.prix - b.prix : b.prix - a.prix;
    });
  }
}
