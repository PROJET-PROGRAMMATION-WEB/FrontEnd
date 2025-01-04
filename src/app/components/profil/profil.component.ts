import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';



interface monprofilProfile {
  id: number;
  name: string;
  biography: string;
  profileImageUrl?: string;
  gout: string[];
}

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
  standalone: true,
  imports: [CommonModule,NavbarComponent]
})
export class ProfileComponent implements OnInit {
  monprofil: monprofilProfile = {
    id: 1,
    name: 'Emma Dubois',
    biography: '',
    profileImageUrl: 'assets/images/monprofils/lolo.jpg',
    gout: [],
    
  };

  isImageModalOpen = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer l'ID du monprofile depuis l'URL
    this.route.params.subscribe(params => {
      const monprofilId = +params['id'];
      // Ici, vous feriez normalement un appel à un service pour récupérer les détails du monprofile
      this.loadmonprofilProfile(monprofilId);
    });
  }

  loadmonprofilProfile(id: number) {
    // Simulation de chargement des données du monprofile
    // Dans une vraie application, cela viendrait d'un service backend
    this.monprofil = {
      id: id,
      name: 'Jean Dupont',
      biography: 'je suis un Europeen passionné de haute couture africaine',
      profileImageUrl: 'assets/images/monprofils/lolo.jpg', // URL de l'image par défaut si disponible
      gout: ['Mode urbaine', 'Tenues de soirée', 'Style professionnel'],
      
    };
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      // Créer un FileReader pour lire le fichier
      const reader = new FileReader();
      
      reader.onload = (e: any) => {
        // Mettre à jour l'URL de l'image
        this.monprofil.profileImageUrl = e.target.result;
        
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

  
}
