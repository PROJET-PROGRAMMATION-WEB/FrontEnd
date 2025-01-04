// cart-page.component.ts
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NavbarComponent } from '../navbar/navbar.component';
interface CartItem {
  name: string;
  price: number;
  quantity: number;
  options?: string;
}

@Component({
  selector: 'app-panier',
  imports :[CommonModule,NavbarComponent],
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  cartItems: CartItem[] = [
    { name: 'T-shirt', price: 20, quantity: 2, options: 'Taille M, Couleur Rouge' },
    { name: 'Jean', price: 50, quantity: 1, options: 'Taille 32' }
  ];

  constructor() {}

  ngOnInit(): void {
    // Les articles sont déjà initialisés pour cette démonstration.
  }

  getTotalCost(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  removeItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  }

  proceedToCheckout(): void {
    alert('Redirection vers la page de paiement');
    // Implémenter la logique pour passer au paiement (ex. redirection ou service de paiement)
  }
  onSubmit() {
    // Implémentation du traitement du paiement
    // Exemple: Envoi de l'e-mail de confirmation
    console.log('Paiement soumis');
    alert('Paiement confirmé !');
  }
}
