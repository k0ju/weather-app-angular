import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WetterComponent } from '../wetter/wetter.component';
import { WetterServiceService } from '../../services/wetter-service.service';
import { GeoCodingService } from '../../services/geo-coding.service';
import { WetterKarte } from '../../interfaces/wetter-karte';
import { SuchErgebnis } from '../../interfaces/such-ergebnis';

@Component({
  selector: 'app-suche',
  standalone: true,
  imports: [MatButtonModule,
            WetterComponent,
            FormsModule,
            MatAutocompleteModule,
            NgIf],
  templateUrl: './suche.component.html',
  styleUrl: './suche.component.scss'
})

export class SucheComponent {
  @Input() titel: string | undefined;
  stadt: string = '';
  wetterKarteId: number = 0;
  ergebnis: SuchErgebnis = { name: '', plz: '', bund: '', land: '', lat: '', long: '' }
  karten: WetterKarte[] = [];
  suchErgebnis: SuchErgebnis[] = [];

  constructor(private wetterService: WetterServiceService, private geoCoding: GeoCodingService, private banner: MatSnackBar) { }

  setSuchergebnis(): void {
    if (this.stadt.length > 2) {
      this.geoCoding.getSuchergebnis(this.stadt).subscribe({
        next: data => {
          this.suchErgebnis = [];

          for (let i = 0; i < data.results.length; i++) {
            let erg = data.results[i];

            this.suchErgebnis.push({
              name: erg.name,
              plz: erg.postcodes?.[0],
              bund: erg.admin1,
              land: erg.country,
              lat: erg.latitude,
              long: erg.longitude
            });
          }
        },
        error: err => this.banner.open('Service zur Zeit nicht erreichbar.', 'OK', { duration: 5000, panelClass: ['banner'] })
      });
    }
  }

  getStadtname(erg: SuchErgebnis): string {
    if (erg && erg.land) {
      return erg.name + " \u2014 " + erg.land;
    } else if (erg) {
      return erg.name
    } else {
      return '';
    }
  }

  getErgebnis(event: any): void {
    this.ergebnis = event.option.value;
  }

  setWetter(): void {
    let pruefung = this.suchErgebnis.find(eintrag =>
      eintrag.name === this.ergebnis.name &&
      eintrag.plz === this.ergebnis.plz &&
      eintrag.bund === this.ergebnis.bund &&
      eintrag.land === this.ergebnis.land &&
      eintrag.lat === this.ergebnis.lat &&
      eintrag.long === this.ergebnis.long
    ) !== undefined;

    if (pruefung) {
      this.wetterService.getWetter(this.ergebnis.lat, this.ergebnis.long).subscribe({
        next: data => {
          let wetterDaten = this.wetterService.parseMeteoData(data);
          this.wetterKarteId++;

          this.karten.push({
            id: this.wetterKarteId,
            stadt: this.ergebnis.name,
            land: this.ergebnis.land,
            temp: wetterDaten.temperatur,
            wetter: wetterDaten.wetterCode,
            tag: wetterDaten.tag,
          });
        },
        error: err => this.banner.open('Service zur Zeit nicht erreichbar.', 'OK', { duration: 5000, panelClass: ['banner'] })
      });
    } else {
      this.banner.open('Bitte einen Vorschlag wählen.', 'OK', { duration: 5000, panelClass: ['banner'] })
    }
  }
}