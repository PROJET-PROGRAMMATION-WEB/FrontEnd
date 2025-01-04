import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule,NavbarComponent],
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;
  isModalOpen: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    // Vérifier si l'inscription vient d'être réussie
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('registration') === 'success') {
      // Vous pouvez ajouter un message de succès ici si vous le souhaitez
      this.errorMessage = 'Inscription réussie ! Vous pouvez maintenant vous connecter.';
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      
      this.authService.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      ).subscribe({
        next: (response) => {
          // La redirection sera gérée par le service d'authentification
          if (response.user.role === 'client') {
            this.router.navigate(['/client/dashboard']);
          } else if (response.user.role === 'stylist') {
            this.router.navigate(['/stylist/dashboard']);
          }
        },
        error: (error) => {
          this.isLoading = false;
          if (error.status === 401) {
            this.errorMessage = 'Email ou mot de passe incorrect';
          } else {
            this.errorMessage = 'Une erreur est survenue, veuillez réessayer';
          }
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    } else {
      this.errorMessage = 'Veuillez remplir correctement tous les champs';
    }
  }

  openRoleSelectionModal() {
    this.isModalOpen = true;
  }

  closeRoleSelectionModal() {
    this.isModalOpen = false;
  }

  redirectToSignup(role: string) {
    this.closeRoleSelectionModal();
    if (role === 'client') {
      this.router.navigate(['/auth/signup/client']);
    } else {
      this.router.navigate(['/auth/signup/stylist']);
    }
  }
}
