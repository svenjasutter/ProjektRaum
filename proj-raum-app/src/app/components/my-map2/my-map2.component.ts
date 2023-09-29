import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Map, NavigationControl } from 'maplibre-gl';

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
    const myAPIKey = 'af49acf480e74ff483a6b5e8a92a761b';
    const mapStyle = 'https://maps.geoapify.com/v1/styles/positron/style.json';

    const initialState = { lng: 8.817145, lat: 47.222894, zoom: 16, pitch: 45 }; // Added pitch for 3D perspective

    const map = new Map({
      container: this.mapContainer.nativeElement,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
      pitch: initialState.pitch, // Set pitch
    });

    map.addControl(new NavigationControl());

    // Add terrain for 3D effect after the map is loaded
    map.on('load', () => {
      map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 14,
      });
      // map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 });

      // // Add a sky layer that will show when the map is highly pitched
      // map.addLayer({
      //   id: 'sky',
      //   type: 'sky',
      //   paint: {
      //     'sky-type': 'atmosphere',
      //     'sky-atmosphere-sun': [0.0, 90.0],
      //     'sky-atmosphere-sun-intensity': 15,
      //   },
      // });
    });
  }
}
