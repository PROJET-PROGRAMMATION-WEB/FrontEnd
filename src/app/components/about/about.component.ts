import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AboutComponent {
  features = [
    {
      title: 'Pour les Stylistes',
      description: 'Une plateforme complète pour exposer vos créations uniques, présenter vos prix et détails de tenues, et gérer efficacement vos commandes.'
    },
    {
      title: 'Pour les Utilisateurs',
      description: 'Découvrez une expérience de mode personnalisée : parcourez des créations exceptionnelles, prenez vos mesures en ligne, vérifiez la disponibilité des stylistes, et effectuez des paiements en toute simplicité.'
    }
  ];

  values = [
    'Créativité',
    'Personnalisation',
    'Accessibilité',
    'Qualité'
  ];
}
