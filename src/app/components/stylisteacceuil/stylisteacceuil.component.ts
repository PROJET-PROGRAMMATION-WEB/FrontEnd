//import { Blob, File } from 'buffer';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Tenue {
  nom: string;
  description: string;
  prix: number;
  delai: string;
  photos: string[];
}

@Component({
  selector: 'app-stylisteacceuil',
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './stylisteacceuil.component.html',
  styleUrls: ['./stylisteacceuil.component.css']
})
export class StylisteacceuilComponent {
  tenues: Tenue[] = [];
  tenueForm: Tenue = { nom: '', description: '', prix: 0, delai: '', photos: [] };

  isEditing = false;

  // Ajouter une nouvelle tenue
  ajouterTenue() {
    if (this.tenueForm.nom && this.tenueForm.prix > 0) {
      this.tenues.push({ ...this.tenueForm });
      this.resetForm();
    }
  }

  // Modifier une tenue
  modifierTenue(tenue: Tenue) {
    this.isEditing = true;
    this.tenueForm = { ...tenue };
  }

  // Soumettre le formulaire
  submitForm() {
    if (this.isEditing) {
      // Mettre à jour une tenue existante
      const index = this.tenues.findIndex(t => t.nom === this.tenueForm.nom);
      if (index !== -1) {
        this.tenues[index] = { ...this.tenueForm };
      }
    } else {
      // Ajouter une nouvelle tenue
      this.ajouterTenue();
    }
    this.resetForm();
  }

  // Supprimer une tenue
  supprimerTenue(tenue: Tenue) {
    this.tenues = this.tenues.filter(t => t !== tenue);
  }

  // Remettre à zéro le formulaire
  resetForm() {
    this.tenueForm = {
      nom: '',
      description: '',
      prix: 0,
      delai: '',
      photos: []
    };
    this.isEditing = false;
  }

  // Gestion des fichiers (photos)
  onFilesChange(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      //this.tenueForm.photos = Array.from(files).map(file => URL.createObjectURL(file));
    }
  }
}
