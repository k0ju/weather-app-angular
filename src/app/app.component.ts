import { Component } from '@angular/core';
import { SucheComponent } from './components/suche/suche.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SucheComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title: string = "Wetter aktuell";
}