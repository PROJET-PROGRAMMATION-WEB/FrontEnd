import { Routes } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { TenuesComponent } from './components/tenues/tenues.component';
import { ProfileComponent } from './components/profil/profil.component';
import { DetailComponent } from './components/detail/detail.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { AboutComponent } from './components/about/about.component';
import { PanierComponent } from './components/panier/panier.component';
import { StylisteacceuilComponent } from './components/stylisteacceuil/stylisteacceuil.component';
import { GestiondescommandesComponent } from './components/gestiondescommandes/gestiondescommandes.component';
import { ProfilstylisteComponent } from './components/profilstyliste/profilstyliste.component';
import { SuivicommandeComponent } from './components/suivicommande/suivicommande.component';

export const routes: Routes = [
  { path: '', component: AcceuilComponent }, // Route par défaut (Accueil)
  { path: 'nos-tenues', component: TenuesComponent },
  { path: 'profil', component: ProfileComponent },
  { path: 'inscription', component: InscriptionComponent},
  { path: 'connexion', component: ConnexionComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'about', component: AboutComponent },
 // {path:'**',component:NotFound}
  {path:'detail/:id',component:DetailComponent},
  { path: 'gestiontenues', component: StylisteacceuilComponent },
  { path: 'gestioncommandes', component: GestiondescommandesComponent },
  { path: 'profilstyliste', component: ProfilstylisteComponent },
  { path: 'suivicommande', component: SuivicommandeComponent },
  
];



