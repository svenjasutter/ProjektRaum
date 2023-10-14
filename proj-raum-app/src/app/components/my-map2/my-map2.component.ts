import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

import { Browser, Map, map, tileLayer } from 'leaflet';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-my-map2',
  templateUrl: './my-map2.component.html',
  styleUrls: ['./my-map2.component.css'],
})
export class MyMap2Component implements OnInit, AfterViewInit {
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const initialState = { lng: 8.817145, lat: 47.222894, zoom: 17 };

    const lefletMap: Map = map(this.mapContainer.nativeElement).setView(
      [initialState.lat, initialState.lng],
      initialState.zoom
    );

    const isRetina = Browser.retina;
    const baseUrl =
      'https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=af49acf480e74ff483a6b5e8a92a761b';
    const retinaUrl =
      'https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey=af49acf480e74ff483a6b5e8a92a761b';

    tileLayer(isRetina ? retinaUrl : baseUrl, {
      attribution: 'Team Raum',
      apiKey: 'af49acf480e74ff483a6b5e8a92a761b',
      maxZoom: 20,
      id: 'osm-bright',
    } as any).addTo(lefletMap);

    lefletMap.on('click', (event) => {
      const clickedLatitude = event.latlng.lat;
      const clickedLongitude = event.latlng.lng;
      this.handleMapClick(clickedLatitude, clickedLongitude);
    });
  }

  private handleMapClick(lat: number, lng: number) {
    console.log(`Clicked at Latitude: ${lat}, Longitude: ${lng}`);
  }
}
