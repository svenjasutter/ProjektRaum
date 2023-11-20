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

import 'leaflet';

declare module 'leaflet' {
  interface MarkerOptions {
    rotationAngle?: number;
  }
}

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

    //#region Location
    this.lefletMap.locate({ setView: true, maxZoom: 17 });

    this.lefletMap.on('locationfound', (e) => {
      Leaflet.circleMarker(e.latlng)
        .addTo(this.lefletMap)
        .bindPopup('Du bist hier!')
        .openPopup();

      console.log("location", e);
      if (e.heading !== undefined) { // TODO:  test on phone
        const arrowIcon = Leaflet.icon({
          iconUrl: '../../assets/images/arrow.png',
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });

        Leaflet.marker(e.latlng, {
          icon: arrowIcon,
          rotationAngle: e.heading
        }).addTo(this.lefletMap);
      }
    });

    this.lefletMap.on('locationerror', (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    });
    //#endregion

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

  getCircle = (): Leaflet.CircleMarker[] => {
    
    const circle1 = new Leaflet.CircleMarker(
      new Leaflet.LatLng(47.22303384293513, 8.818438053131105), //47.22308393724887, 8.818357586860659
      {
        radius: 10,
        color: '#B56FC9',
        fillOpacity: 1,
        name: "1",
        interactive: true
      } as Leaflet.CircleOptions
    );
    const circle2 = new Leaflet.CircleMarker(
      new Leaflet.LatLng(47.223417290931025, 8.81845682859421),
      {
        radius: 10,
        color: '#B56FC9',
        fillOpacity: 1,
        name: "2",
      } as Leaflet.CircleOptions
    );
    const circle3 = new Leaflet.CircleMarker(
      new Leaflet.LatLng(47.22341000453416, 8.818918168544771),
      {
        radius: 10,
        color: '#B56FC9',
        fillOpacity: 1,
        name: "3",
      } as Leaflet.CircleOptions
    );
    const circle4 = new Leaflet.CircleMarker(
      new Leaflet.LatLng(47.223091223690545, 8.818826973438265),
      {
        radius: 10,
        color: '#B56FC9',
        fillOpacity: 1,
        name: "4",
      } as Leaflet.CircleOptions
    );
    const circle5 = new Leaflet.CircleMarker(
      new Leaflet.LatLng(47.22306936436247, 8.818207383155825), //47.223277027615275, 8.81805181503296
      {
        radius: 10,
        color: '#B56FC9',
        fillOpacity: 1,
        name: "5",
      } as Leaflet.CircleOptions
    );
    const circle6 = new Leaflet.CircleMarker(
      new Leaflet.LatLng( 47.22341911253008, 8.818164467811586),
      {
        radius: 10,
        color: '#B56FC9',
        fillOpacity: 1,
        name: "6",
      } as Leaflet.CircleOptions
    );

    circle1.on('click', this.handleCircle.bind(this));
    circle2.on('click', this.handleCircle.bind(this));
    circle3.on('click', this.handleCircle.bind(this));
    circle4.on('click', this.handleCircle.bind(this));
    circle5.on('click', this.handleCircle.bind(this));
    circle6.on('click', this.handleCircle.bind(this));

    return [circle1, circle2, circle3, circle4, circle5, circle6];
  }

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

    const polygon2 = new Leaflet.Polygon(
      [
          new Leaflet.LatLng(47.22331437048235, 8.818041086196901),
          new Leaflet.LatLng(47.223371750934135, 8.818138986825945),
          new Leaflet.LatLng(47.22340089653666, 8.818108141422274),
          new Leaflet.LatLng(47.22344734730754, 8.81818324327469),
          new Leaflet.LatLng(47.22340089653666, 8.818235546350481),
          new Leaflet.LatLng(47.223452812101435, 8.818326741456987),
          new Leaflet.LatLng(47.22343823931646, 8.818349540233614),
          new Leaflet.LatLng(47.22349653043237, 8.818447440862657),
          new Leaflet.LatLng(47.22352476516859, 8.818409889936449),
          new Leaflet.LatLng(47.22357759140889, 8.818506449460985),
          new Leaflet.LatLng(47.223672314190694, 8.818391114473345),
          new Leaflet.LatLng(47.223724229489676, 8.818479627370836),
          new Leaflet.LatLng(47.22388543983092, 8.818281143903734),
          new Leaflet.LatLng(47.22383625706692, 8.818179219961168),
          new Leaflet.LatLng(47.22386540241406, 8.818144351243975),
          new Leaflet.LatLng(47.22381621963146, 8.818058520555498),
          new Leaflet.LatLng(47.22384354340519, 8.81802096962929),
          new Leaflet.LatLng(47.22379709298147, 8.817927092313768),
          new Leaflet.LatLng(47.22382168438734, 8.81788954138756),
          new Leaflet.LatLng(47.223777966324555, 8.817797005176546),
          new Leaflet.LatLng(47.22380164694638, 8.81775811314583),
          new Leaflet.LatLng(47.22374791013549, 8.817666918039324),
          new Leaflet.LatLng(47.22371421075174, 8.817696422338487),
          new Leaflet.LatLng(47.22366593862416, 8.817610591650011),
      ] as Leaflet.LatLng[],
      {
          fillColor: '#c478a7',
          color: '#78044c',
          name: 'building2',
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
    polygon2.on('click', this.handlePolygonClick.bind(this));
    polygon3.on('click', this.handlePolygonClick.bind(this));
    polygon4.on('click', this.handlePolygonClick.bind(this));
    polygon5.on('click', this.handlePolygonClick.bind(this));
    polygon6.on('click', this.handlePolygonClick.bind(this));
    polygon8.on('click', this.handlePolygonClick.bind(this));

    return [polygon1, polygon2, polygon3, polygon4, polygon5, polygon6, polygon8];
  };

  private handlePolygonClick(e: any) {
    const polygonName = e.target.options.name;
    console.log(`Polygon ${polygonName} clicked!`);

    const tagMapping: { [key: string]: string } = {};
    tagMapping['building1'] = 'b1';
    tagMapping['building2'] = 'b2';
    tagMapping['building3'] = 'b3';
    tagMapping['building4'] = 'b4';
    tagMapping['building5'] = 'b5';
    tagMapping['building6'] = 'b6';
    tagMapping['building8'] = 'b8';
    /*for (let i = 1; i <= 8; i++) {
      tagMapping[`building${i}`] = `b${i}`;
    }*/

    // console.log(tagMapping[polygonName]);

    if (tagMapping[polygonName]) {
      this.mapService.selectBuilding(tagMapping[polygonName]);
    }
  }

  private handleCircle(e: any) {
    const circleName = e.target.options.name;
    console.log(`Circle ${circleName} clicked!`);
    this.openDialog(circleName);
  }

  //#endregion

  private getLayers(): Leaflet.Layer[] {
    return [...this.getPolygons(), ...this.getCircle()]; //, ...this.getRoutes()
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
        this.setMapView(8.818105459213259, 47.22362677441286);
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
    
    // not working yet
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

  //#region Dialog
  openDialog(circleName: string): void {
    const dialogRef = this.dialog.open(DialogCampusComponent, {
      // width: '500px',
      data: { name : circleName}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // handle result if needed
    });
  }
  //#endregion
  
}