import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-detail',
  imports: [CommonModule,NavbarComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  cards: any[] = [];
  id: number | null = null;
  filteredCards: any[] = []
  constructor(private http: HttpClient,private route:ActivatedRoute ) {}

  ngOnInit(): void {
    this.http.get<any>('/chemin.json').subscribe(data => {
      this.cards = data.cards;
      const idParam = this.route.snapshot.paramMap.get('id');
      this.id = idParam ? parseInt(idParam, 10) : null;

      //Filtrer
      if (this.id !== null) {
        console.log("Oui")
        this.cards = this.cards.filter(card => card.id == this.id);
      }
    });

    
  }
}
