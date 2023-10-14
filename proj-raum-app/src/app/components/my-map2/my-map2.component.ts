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
    //#region initMap
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

    //#endregion initMap

    //#region LoadOverlays
    const layers = this.getLayers();
    layers.forEach((layer) => {
      layer.addTo(lefletMap);
    });
    //#endregion

    //#region debug
    lefletMap.on('click', (event) => {
      const clickedLatitude = event.latlng.lat;
      const clickedLongitude = event.latlng.lng;
      this.handleMapClick(clickedLatitude, clickedLongitude);
    });

    lefletMap.on('locationerror', (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    });
    //#endregion debug
  }

  //#region Overlays

  getPolygons = (): Leaflet.Polygon[] => {
    const polygon = new Leaflet.Polygon(
      [
        new Leaflet.LatLng(47.22325334675914, 8.818200677633287),
        new Leaflet.LatLng(47.22354207032206, 8.818721026182176),
        new Leaflet.LatLng(47.2232387739193, 8.81908714771271),
        new Leaflet.LatLng(47.222948227089354, 8.81857216358185),
      ] as Leaflet.LatLng[],
      {
        fillColor: '#eb530d',
        color: '#eb780d',
        name: 'building8',
      } as Leaflet.PolylineOptions
    );

    polygon.on('click', this.handlePolygonClick);

    return [polygon];
  };

  private handlePolygonClick(e: any) {
    const polygonName = e.target.options.name;
    console.log(`Polygon ${polygonName} clicked!`);
  }

  //#endregion

  private getLayers(): Leaflet.Layer[] {
    return [...this.getPolygons()]; //, ...this.getRoutes()
  }

  //#region debug
  private handleMapClick(lat: number, lng: number) {
    console.log(`Clicked at Latitude: ${lat}, Longitude: ${lng}`);
  }
  //#endregion debug
}
