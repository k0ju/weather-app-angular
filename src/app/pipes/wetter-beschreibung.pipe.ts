import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wetterBeschreibung',
  standalone: true
})

export class WetterBeschreibungPipe implements PipeTransform {

  transform(value: number): string {
    let beschreibung: string;

    switch (value) {
      case 0:  {
        beschreibung = 'klarer Himmel';
        break;
      }
      case 1: {
        beschreibung = 'überwiegend klar';
        break;
      }
      case 2: {
        beschreibung = 'teils bewölkt';
        break;
      }
      case 3: {
        beschreibung = 'bewölkt';
        break;
      }
      case 45:
      case 48: {
        beschreibung = 'Nebel';
        break;
      }
      case 51:
      case 53:
      case 55:  {
        beschreibung = 'Nieselregen';
        break;
      }
      case 56:
      case 57: {
        beschreibung = 'gefrierender Nieselregen';
        break;
      }
      case 61: {
        beschreibung = 'leichter Regen';
        break;
      }
      case 63: {
        beschreibung = 'Regen';
        break;
      }
      case 65: {
        beschreibung = 'starker Regen';
        break;
      }
      case 66:
      case 67: {
        beschreibung = 'gefrierender Regen';
        break;
      }
      case 71: {
        beschreibung = 'leichter Schneefall';
        break;
      }
      case 73: {
        beschreibung = 'Schneefall';
        break;
      }
      case 75: {
        beschreibung = 'starker Schneefall';
        break;
      }
      case 77: {
        beschreibung = 'Griesel';
        break;
      }
      case 80: {
        beschreibung = 'leichter Regenschauer';
        break;
      }
      case 81: {
        beschreibung = 'Regenschauer';
        break;
      }
      case 82: {
        beschreibung = 'starker Regenschauer';
        break;
      }
      case 85: {
        beschreibung = 'Schneeschauer';
        break;
      }
      case 86: {
        beschreibung = 'starker Schneeschauer';
        break;
      }
      case 95: {
        beschreibung = 'Gewitter';
        break;
      }
      case 96:
      case 99: {
        beschreibung = 'Gewitterschauer';
        break;
      }
      default: {
        beschreibung = 'keine Angabe';
      }
    }
    return beschreibung;
  }
}