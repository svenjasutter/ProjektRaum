import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

import { Browser, Map, map, tileLayer } from 'leaflet';
import * as Leaflet from 'leaflet';
import { MapService } from 'src/app/services/map.service';

interface CustomPolylineOptions extends Leaflet.PolylineOptions {
  name?: string;
}


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  private lefletMap!: Map; 

  constructor(private mapService: MapService) {}

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

    //#region debug
    this.lefletMap.on('click', (event) => {
      const clickedLatitude = event.latlng.lat;
      const clickedLongitude = event.latlng.lng;
      this.handleMapClick(clickedLatitude, clickedLongitude);
    });

    this.lefletMap.on('locationerror', (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    });
    //#endregion debug
  }

  //#region Overlays

  getPolygons = (): Leaflet.Polygon[] => {
    const polygon8 = new Leaflet.Polygon(
      [
        new Leaflet.LatLng(47.22325334675914, 8.818200677633287),
        new Leaflet.LatLng(47.22354207032206, 8.818721026182176),
        new Leaflet.LatLng(47.2232387739193, 8.81908714771271),
        new Leaflet.LatLng(47.222948227089354, 8.81857216358185),
      ] as Leaflet.LatLng[],
      {
        fillColor: '#c478a7',
        color: '#78044c',
        name: 'building8',
      } as CustomPolylineOptions
    );

    const polygon6 = new Leaflet.Polygon(
      [
          new Leaflet.LatLng(47.22355117829532, 8.816384822130205),
          new Leaflet.LatLng(47.22335626732629, 8.816026747226717),
          new Leaflet.LatLng(47.22375701807337, 8.815535902976992),
          new Leaflet.LatLng(47.22395374914968, 8.815896660089495),
      ] as Leaflet.LatLng[],
      {
          fillColor: '#c478a7',
          color: '#78044c',
          name: 'building6',
      } as CustomPolylineOptions
    );

    const polygon5 = new Leaflet.Polygon(
      [
        new Leaflet.LatLng(47.223712389162806, 8.81637677550316),
        new Leaflet.LatLng(47.22350381681733, 8.816630244255068),
        new Leaflet.LatLng(47.223769769183775, 8.817115724086763),
        new Leaflet.LatLng(47.22394464124561, 8.816914558410646),
        new Leaflet.LatLng(47.22396285705219, 8.816945403814318),
        new Leaflet.LatLng(47.223984716011856, 8.816909193992617),
        new Leaflet.LatLng(47.22397014337308, 8.81688103079796),
        new Leaflet.LatLng(47.22398107285252, 8.816863596439363),
      ] as Leaflet.LatLng[],
      {
        fillColor: '#c478a7',
        color: '#78044c',
        name: 'building5',
      } as CustomPolylineOptions
    );

    const polygon4 = new Leaflet.Polygon(
      [
          new Leaflet.LatLng(47.223127655884, 8.816178292036058),
          new Leaflet.LatLng(47.22306298872342, 8.816252052783968),
          new Leaflet.LatLng(47.223039307771664, 8.816207796335222),
          new Leaflet.LatLng(47.22304568341357, 8.816197067499163),
          new Leaflet.LatLng(47.222969175660126, 8.816065639257433),
          new Leaflet.LatLng(47.22292636770231, 8.81611928343773),
          new Leaflet.LatLng(47.22294185143573, 8.816142082214357),
          new Leaflet.LatLng(47.222785192277286, 8.816333860158922),
          new Leaflet.LatLng(47.222815249012164, 8.816380798816683),
          new Leaflet.LatLng(47.22278337065642, 8.816425055265428),
          new Leaflet.LatLng(47.222924546086325, 8.816685229539873),
          new Leaflet.LatLng(47.22301016197034, 8.816583305597307),
          new Leaflet.LatLng(47.22325790077073, 8.817020505666735),
          new Leaflet.LatLng(47.223460098492446, 8.81677642464638),
      ] as Leaflet.LatLng[],
      {
          fillColor: '#c478a7',
          color: '#78044c',
          name: 'building4',
      } as CustomPolylineOptions
    );

    const polygon3 = new Leaflet.Polygon(
      [
          new Leaflet.LatLng(47.222923635278285, 8.817591816186907),
          new Leaflet.LatLng(47.22281980306142, 8.817406743764879),
          new Leaflet.LatLng(47.2226959327823, 8.81756365299225),
          new Leaflet.LatLng(47.222744205793134, 8.817652165889742),
          new Leaflet.LatLng(47.222524699861026, 8.817921727895738),
          new Leaflet.LatLng(47.22257297302781, 8.818011581897737),
          new Leaflet.LatLng(47.22251650252646, 8.81808936595917),
          new Leaflet.LatLng(47.222620335337375, 8.818274438381197),
          new Leaflet.LatLng(47.22269684359423, 8.818176537752153),
          new Leaflet.LatLng(47.222762422012224, 8.818291872739794),
          new Leaflet.LatLng(47.222866254341476, 8.818156421184542),
          new Leaflet.LatLng(47.22290724073125, 8.818227499723436),
          new Leaflet.LatLng(47.223004697130804, 8.818108141422274),
          new Leaflet.LatLng(47.22280431929238, 8.81774201989174),
      ] as Leaflet.LatLng[],
      {
          fillColor: '#c478a7',
          color: '#78044c',
          name: 'building3',
      } as CustomPolylineOptions
    );

    const polygon1 = new Leaflet.Polygon(
      [
          new Leaflet.LatLng(47.22385082974249, 8.817315548658373),
          new Leaflet.LatLng(47.22353478394235, 8.816746920347216),
          new Leaflet.LatLng(47.22300378632416, 8.817430883646013),
          new Leaflet.LatLng(47.223024734873, 8.817471116781237),
          new Leaflet.LatLng(47.222960067586904, 8.817547559738161),
          new Leaflet.LatLng(47.22297008646738, 8.817564994096758),
          new Leaflet.LatLng(47.22291634881356, 8.817638754844667),
          new Leaflet.LatLng(47.222924546086325, 8.817657530307772),
          new Leaflet.LatLng(47.222856235441384, 8.817750066518785),
          new Leaflet.LatLng(47.22292181366221, 8.817881494760515),
          new Leaflet.LatLng(47.22290997315611, 8.817901611328127),
          new Leaflet.LatLng(47.22309851013125, 8.818242251873018),
      ] as Leaflet.LatLng[],
      {
          fillColor: '#c478a7',
          color: '#78044c',
          name: 'building1',
      } as CustomPolylineOptions
    );

    polygon1.on('click', this.handlePolygonClick.bind(this));
    polygon3.on('click', this.handlePolygonClick.bind(this));
    polygon4.on('click', this.handlePolygonClick.bind(this));
    polygon5.on('click', this.handlePolygonClick.bind(this));
    polygon6.on('click', this.handlePolygonClick.bind(this));
    polygon8.on('click', this.handlePolygonClick.bind(this));

    return [polygon1, polygon3, polygon4, polygon5, polygon6, polygon8];
  };

  private handlePolygonClick(e: any) {
    const polygonName = e.target.options.name;
    console.log(`Polygon ${polygonName} clicked!`);

    const tagMapping: { [key: string]: string } = {};
    for (let i = 1; i <= 8; i++) {
      tagMapping[`building${i}`] = `b${i}`;
    }

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
    // const tagMapping: { [key: string]: string } = {};
    // for (let i = 1; i <= 8; i++) {
    //     tagMapping[`b${i}`] = `building${i}`;
    // }

    // const buildingName = tagMapping[tag];
    // if (!buildingName) return;

    // console.log("MatExpand of " + buildingName);

    switch (tag) {
      case "b1":
        this.setMapView(8.817496597766878, 47.22335535652567);
        break;
      case "b2":
        // this.setMapView(/* longitude for b2 */, /* latitude for b2 */);
        break;
      case "b3":
        this.setMapView(8.81796330213547, 47.222741473359754);
        break;
      case "b4":
        this.setMapView(8.816431760787966, 47.223078472416944);
        break;
      case "b5":
        this.setMapView(8.81676033139229, 47.22374699934162);
        break;
      case "b6":
        this.setMapView(8.815959692001345, 47.22365591987518);
        break;
      case "b8":
        this.setMapView(8.818652629852297, 47.223242417129626);
        break;
      default:
        // Handle any other cases or throw an error if needed
        break;
    }
    

    // this.getPolygons().forEach(polygon => {
    //   console.log(polygon.options.name);
    //     if (polygon.options.name === buildingName) {
    //         polygon.setStyle({
    //           fillColor: '#87CEFA',
    //           color: '#0000CD',
    //         });
    //     } else {
    //         polygon.setStyle({
    //             fillColor: '#c478a7',
    //             color: '#78044c',
    //         });
    //     }
    //     console.log(polygon);
    // });
  }


  setMapView(lng: number, lat: number, zoom: number = 19) {
    if (this.lefletMap) {
      this.lefletMap.setView([lat, lng], zoom);
    }
  }
  

}
