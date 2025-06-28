import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mfe2-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mfe2';
  
  // Dati hardcoded per MFE2 - Tabella Prodotti
  products = [
    { id: 1, nome: 'Laptop Dell', categoria: 'Elettronica', prezzo: 899.99, disponibile: true },
    { id: 2, nome: 'iPhone 15', categoria: 'Telefonia', prezzo: 999.99, disponibile: true },
    { id: 3, nome: 'Monitor 4K', categoria: 'Elettronica', prezzo: 349.99, disponibile: false },
    { id: 4, nome: 'Tastiera Meccanica', categoria: 'Accessori', prezzo: 129.99, disponibile: true },
    { id: 5, nome: 'Mouse Gaming', categoria: 'Accessori', prezzo: 79.99, disponibile: true },
    { id: 6, nome: 'Webcam HD', categoria: 'Elettronica', prezzo: 89.99, disponibile: false }
  ];
}
