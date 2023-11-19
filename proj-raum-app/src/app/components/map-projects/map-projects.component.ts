import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Inject,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Browser, Map, map, tileLayer } from 'leaflet';
import * as Leaflet from 'leaflet';
import { MapService } from 'src/app/services/map.service';
import { DialogCampusComponent } from '../dialog-campus/dialog-campus.component';

interface CustomPolylineOptions extends Leaflet.PolylineOptions {
  name?: string;
}


@Component({
  selector: 'app-map-projects',
  templateUrl: './map-projects.component.html',
  styleUrls: ['./map-projects.component.css']
})
export class MapProjectsComponent implements OnInit, AfterViewInit{
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  private lefletMap!: Map;

  constructor(private mapService: MapService, public dialog: MatDialog) {}

  ngOnInit() {
    this.mapService.buildingSelected$.subscribe(tag => {
      this.highlightBuilding(tag);
  });
  }

  ngAfterViewInit() {
    //#region initMap 
    const initialState = { lng: 8.81706476211548, lat: 47.223185947341406, zoom: 18 };
    this.lefletMap = map(this.mapContainer.nativeElement).setView(
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
    } as any).addTo(this.lefletMap);

    //#endregion initMap

    //#region LoadOverlays
    if (this.lefletMap) {
      const layers = this.getLayers();
      layers.forEach((layer) => {
          layer.addTo(this.lefletMap);
      });
    }

    //#endregion

     // Locate position
    //  this.lefletMap.locate({ setView: true, maxZoom: 17 });

    //  this.lefletMap.on('locationfound', (e) => {
    //    Leaflet.circleMarker(e.latlng)
    //      .addTo(this.lefletMap)
    //      .bindPopup('You are here!')
    //      .openPopup();
    //  });
 
    //  this.lefletMap.on('locationerror', (err) => {
    //    console.warn(`ERROR(${err.code}): ${err.message}`);
    //  });

    //#region debug
    this.lefletMap.on('click', (event) => {
      const clickedLatitude = event.latlng.lat;
      const clickedLongitude = event.latlng.lng;
      this.handleMapClick(clickedLongitude, clickedLatitude);
    });

    this.lefletMap.on('locationerror', (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    });
    //#endregion debug
  }

  //#region Overlays

  getPolygons = (): Leaflet.Polygon[] => {
    const polygon9 = new Leaflet.Polygon(
      [
        new Leaflet.LatLng(47.22287469450066, 8.81856679916382),
        new Leaflet.LatLng(47.22272896488133, 8.81857216358185),
        new Leaflet.LatLng(47.22275811083725, 8.819156885147097),
        new Leaflet.LatLng(47.22289734327818, 8.819151520729067),
        //new Leaflet.LatLng(47.2229184133083, 8.819156885147097),
      ] as Leaflet.LatLng[],
      {
        fillColor: '#c478a7',
        color: '#78044c',
        name: 'building9',
      } as CustomPolylineOptions
    );

    const polygon10 = new Leaflet.Polygon(
      [
          new Leaflet.LatLng(47.22351981649992, 8.818927556276323),
          new Leaflet.LatLng(47.2236377039631, 8.819152861833574),
          new Leaflet.LatLng(47.22332985410246, 8.819476068019869),
          new Leaflet.LatLng(47.22289448941338, 8.819543123245241),
          new Leaflet.LatLng(47.22286352191438, 8.819296360015871),
          new Leaflet.LatLng(47.223220163181715, 8.81924942135811),
      ] as Leaflet.LatLng[],
      {
          fillColor: '#c478a7',
          color: '#78044c',
          name: 'building10',
      } as CustomPolylineOptions
    );


    const polygon11 = new Leaflet.Polygon(
      [
          new Leaflet.LatLng(47.22365956305683, 8.819545805454256),
          new Leaflet.LatLng(47.22367049260031, 8.81983280181885),
          new Leaflet.LatLng(47.22294731628175, 8.819929361343386),
          new Leaflet.LatLng(47.22293456497349, 8.819634318351747),
      ] as Leaflet.LatLng[],
      {
          fillColor: '#c478a7',
          color: '#78044c',
          name: 'building11',
      } as CustomPolylineOptions
    );
    polygon9.on('click', this.handlePolygonClick.bind(this));
    polygon10.on('click', this.handlePolygonClick.bind(this));
    polygon11.on('click', this.handlePolygonClick.bind(this));

    return [polygon9, polygon10, polygon11];
  };

  private handlePolygonClick(e: any) {
    const polygonName = e.target.options.name;
    console.log(`Polygon ${polygonName} clicked!`);

    const tagMapping: { [key: string]: string } = {};
    tagMapping['building9'] = 'b9';
    tagMapping['building10'] = 'b10';
    tagMapping['building11'] = 'b11';
    /*for (let i = 1; i <= 8; i++) {
      tagMapping[`building${i}`] = `b${i}`;
    }*/

    // console.log(tagMapping[polygonName]);

    if (tagMapping[polygonName]) {
      this.mapService.selectBuilding(tagMapping[polygonName]);
    }
  }

  //#endregion

  private getLayers(): Leaflet.Layer[] {
    return [...this.getPolygons()]; //, ...this.getRoutes()
  }

  //#region debug
  private handleMapClick(lat: number, lng: number) {
    console.log(`Clicked at : ${lng}, ${lat}`);
  }
  //#endregion debug

  highlightBuilding(tag: string) {

    switch (tag) {
      case "b9":
        this.setMapView(8.81883502006531, 47.22282162468101);
        break;
      case "b10":
        this.setMapView(8.819350004196169, 47.223269741199125);
        break;
      case "b11":
        this.setMapView(8.819709420204164, 47.22333167570449);
        break;
      default:
        // Handle any other cases or throw an error if needed
        break;
    }

  }


  setMapView(lng: number, lat: number, zoom: number = 19) {
    if (this.lefletMap) {
      this.lefletMap.setView([lat, lng], zoom);
    }
  }
}
