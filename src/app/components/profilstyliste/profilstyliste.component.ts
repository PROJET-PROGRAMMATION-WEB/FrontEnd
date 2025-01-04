
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


interface Outfit {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: Date;
}

interface StylistProfile {
  id: number;
  name: string;
  biography: string;
  profileImageUrl?: string;
  specialties: string[];
  outfits: Outfit[];
  reviews: Review[];
}

@Component({
  selector: 'app-profilstyliste',
  imports: [RouterLink,CommonModule],
  templateUrl: './profilstyliste.component.html',
  standalone: true,
  styleUrl: './profilstyliste.component.css'
})


export class ProfilstylisteComponent implements OnInit {
  stylist: StylistProfile = {
    id: 1,
    name: 'Emma Dubois',
    biography: 'Styliste passionnée avec plus de 10 ans d\'expérience dans la mode contemporaine. Spécialisée dans les looks élégants et modernes.',
    profileImageUrl: 'assets/images/stylists/lolo.jpg',
    specialties: ['Mode urbaine', 'Tenues de soirée', 'Style professionnel'],
    outfits: [
      {
        id: 1,
        name: 'Tenue Élégante de Printemps',
        description: 'Un ensemble chic et décontracté parfait pour une journée de printemps',
        imageUrl: 'assets/images/outfits/outfit1.jpg'
      },
      {
        id: 2,
        name: 'Look Professionnel Moderne',
        description: 'Tailleur élégant avec une touche contemporaine',
        imageUrl: 'assets/images/outfits/outfit2.jpg'
      }
    ],
    reviews: [
      {
        id: 1,
        author: 'Marie L.',
        rating: 5,
        comment: 'Emma a créé une tenue absolument magnifique pour mon entretien d\'embauche !',
        date: new Date('2023-11-15')
      },
      {
        id: 2,
        author: 'Sophie R.',
        rating: 4,
        comment: 'Super professionnelle et à l\'écoute. Recommandé !',
        date: new Date('2023-10-22')
      }
    ]
  };

  isImageModalOpen = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer l'ID du styliste depuis l'URL
    this.route.params.subscribe(params => {
      const stylistId = +params['id'];
      // Ici, vous feriez normalement un appel à un service pour récupérer les détails du styliste
      this.loadStylistProfile(stylistId);
    });
  }

  loadStylistProfile(id: number) {
    // Simulation de chargement des données du styliste
    // Dans une vraie application, cela viendrait d'un service backend
    this.stylist = {
      id: id,
      name: 'Jean Dupont',
      biography: 'Styliste passionné avec 10 ans d\'expérience',
      profileImageUrl: 'assets/images/stylists/lolo.jpg', // URL de l'image par défaut si disponible
      specialties: ['Mode urbaine', 'Tenues de soirée', 'Style professionnel'],
      outfits: [
        {
          id: 1,
          name: 'Tenue Élégante de Printemps',
          description: 'Un ensemble chic et décontracté parfait pour une journée de printemps',
          imageUrl: 'assets/images/outfits/outfit1.jpg'
        },
        {
          id: 2,
          name: 'Look Professionnel Moderne',
          description: 'Tailleur élégant avec une touche contemporaine',
          imageUrl: 'assets/images/outfits/outfit2.jpg'
        }
      ],
      reviews: [
        {
          id: 1,
          author: 'Marie L.',
          rating: 5,
          comment: 'Emma a créé une tenue absolument magnifique pour mon entretien d\'embauche !',
          date: new Date('2023-11-15')
        },
        {
          id: 2,
          author: 'Sophie R.',
          rating: 4,
          comment: 'Super professionnelle et à l\'écoute. Recommandé !',
          date: new Date('2023-10-22')
        }
      ]
    };
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      // Créer un FileReader pour lire le fichier
      const reader = new FileReader();
      
      reader.onload = (e: any) => {
        // Mettre à jour l'URL de l'image
        this.stylist.profileImageUrl = e.target.result;
        
        // Ici, vous pourriez également envoyer l'image à un serveur
        this.uploadProfileImage(file);
      };
      
      // Lire le fichier comme une URL de données
      reader.readAsDataURL(file);
    }
  }

  uploadProfileImage(file: File) {
    // Logique d'upload de l'image 
    // Dans une vraie application, vous utiliseriez un service pour envoyer l'image au backend
    console.log('Image à uploader:', file);
  }

  openImageModal() {
    this.isImageModalOpen = true;
  }

  closeImageModal() {
    this.isImageModalOpen = false;
  }

  calculateAverageRating(): number {
    if (this.stylist.reviews.length === 0) return 0;
    const totalRating = this.stylist.reviews.reduce((sum, review) => sum + review.rating, 0);
    return Math.round(totalRating / this.stylist.reviews.length * 10) / 10;
  }
}
