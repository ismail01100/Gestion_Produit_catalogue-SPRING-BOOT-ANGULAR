import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component'; // Import NavbarComponent
import { BannerComponent } from './banner/banner.component'; // Import BannerComponent
import { FooterComponent } from './footer/footer.component'; // Import FooterComponent
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent, BannerComponent, FooterComponent, RouterOutlet], // Import the components here
})
export class AppComponent {
  title = 'Catalogue de Produits';
}
