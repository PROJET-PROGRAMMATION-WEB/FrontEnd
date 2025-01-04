import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-suivicommande',
  imports: [RouterLink],
  templateUrl: './suivicommande.component.html',
  styleUrl: './suivicommande.component.css'
})
export class SuivicommandeComponent {
  orders = [
    {
      date: '21 déc. 2023',
      reference: 'CPC/REF150001',
      member: 'Lifa Patrick',
      productImage: 'product1.png',
      amount: '36,00 €',
      paymentMethod: 'Carte bancaire',
      paymentStatus: 'PAYÉ',
      orderStatus: 'À PRÉPARER',
    },
    {
      date: '20 déc. 2023',
      reference: 'CPC/REF150002',
      member: 'Fuhndi Arnold',
      productImage: 'product2.png',
      amount: '189,00 €',
      paymentMethod: 'Chèque',
      paymentStatus: 'PAYÉ',
      orderStatus: 'ENVOYÉ',
    },
    // Ajouter plus d'objets pour d'autres commandes
  ];
}
