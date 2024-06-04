import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WetterKarte } from '../../interfaces/wetter-karte';
import { WmoCodesPipe } from '../../pipes/wmo-codes.pipe';
import { WetterBeschreibungPipe } from '../../pipes/wetter-beschreibung.pipe';

@Component({
  selector: 'app-wetter',
  standalone: true,
  imports: [NgFor,
            NgIf,
            MatCardModule,
            MatIconModule,
            MatButtonModule,
            WmoCodesPipe,
            WetterBeschreibungPipe],
  templateUrl: './wetter.component.html',
  styleUrl: './wetter.component.scss'
})

export class WetterComponent {
  @Input() karten: WetterKarte[] | undefined;

  loeschen(id: number): void {
    this.karten!.forEach( (item, index) => {
      if(item.id === id) this.karten!.splice(index,1);
    });
  }
}