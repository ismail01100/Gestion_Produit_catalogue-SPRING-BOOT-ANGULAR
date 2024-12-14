import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { AfficherProduitsComponent } from './afficher-produits/afficher-produits.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';

const routes: Routes = [
  { path: '', redirectTo: 'produits', pathMatch: 'full' },
  { path: 'produits', component: AfficherProduitsComponent },
  { path: 'ajouter', component: AjouterProduitComponent }
];

export const appConfig = [
  provideRouter(routes),
  provideHttpClient(),
  importProvidersFrom(FormsModule)
];
