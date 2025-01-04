import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestiondescommandes',
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './gestiondescommandes.component.html',
  styleUrl: './gestiondescommandes.component.css'
})
export class GestiondescommandesComponent {
  // Liste des commandes
  commandes = [
    { id: 1, client: 'John Doe', statut: 'En attente', date: '26/12/2024', total: 125 },
    { id: 2, client: 'Jane Smith', statut: 'Terminée', date: '25/12/2024', total: 150 }
  ];
  statuts=['En attente' ,'Encours','Terminée'];

  // Fonction pour mettre à jour le statut de la commande
  updateStatutCommande(id: number, statut: string) {
    console.log(`Mettre à jour le statut de la commande ID: ${id} à ${statut}`);
    // Logique pour mettre à jour le statut
  }
}

