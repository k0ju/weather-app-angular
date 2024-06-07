import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wmoCodes',
  standalone: true
})

// WMO Weather interpretation codes (WW) -> Wetter-Icons https://erikflowers.github.io/weather-icons/
export class WmoCodesPipe implements PipeTransform {

  transform(value: number, tageszeit: number = 1): string {
    let wmo: string;

    if (tageszeit === 0) {
      switch (value) {
        case 0:
        case 1: {
          wmo = 'wi-night-clear';
          break;
        }
        case 2: {
          wmo = 'wi-night-alt-partly-cloudy';
          break;
        }
        case 3: {
          wmo = 'wi-night-alt-cloudy';
          break;
        }
        case 45:
        case 48: {
          wmo = 'wi-night-fog';
          break;
        }
        case 51:
        case 53:
        case 55:
        case 56:
        case 57: {
          wmo = 'wi-night-alt-rain-mix';
          break;
        }
        case 61:
        case 63:
        case 65:
        case 66:
        case 67: {
          wmo = 'wi-night-alt-rain';
          break;
        }
        case 71:
        case 73:
        case 75:
        case 77: {
          wmo = 'wi-night-alt-snow';
          break;
        }
        case 80:
        case 81:
        case 82: {
          wmo = 'wi-night-alt-showers';
          break;
        }
        case 85:
        case 86: {
          wmo = 'wi-night-alt-sleet';
          break;
        }
        case 95: {
          wmo = 'wi-night-alt-thunderstorm';
          break;
        }
        case 96:
        case 99: {
          wmo = 'wi-night-alt-storm-showers';
          break;
        }
        default: {
          wmo = 'wi-na';
        }
      }
    } else {
      switch (value) {
        case 0:
        case 1: {
          wmo = 'wi-day-sunny';
          break;
        }
        case 2: {
          wmo = 'wi-day-sunny-overcast';
          break;
        }
        case 3: {
          wmo = 'wi-day-cloudy';
          break;
        }
        case 45:
        case 48: {
          wmo = 'wi-day-fog';
          break;
        }
        case 51:
        case 53:
        case 55:
        case 56:
        case 57: {
          wmo = 'wi-day-rain-mix';
          break;
        }
        case 61:
        case 63:
        case 65:
        case 66:
        case 67: {
          wmo = 'wi-day-rain';
          break;
        }
        case 71:
        case 73:
        case 75:
        case 77: {
          wmo = 'wi-day-snow';
          break;
        }
        case 80:
        case 81:
        case 82: {
          wmo = 'wi-day-showers';
          break;
        }
        case 85:
        case 86: {
          wmo = 'wi-day-sleet';
          break;
        }
        case 95: {
          wmo = 'wi-day-thunderstorm';
          break;
        }
        case 96:
        case 99: {
          wmo = 'wi-day-storm-showers';
          break;
        }
        default: {
          wmo = 'wi-na';
        }
      }
    }
    return wmo;
  }
}