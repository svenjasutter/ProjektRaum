import { Component, OnInit } from '@angular/core';
// import * as OSMJSS from 'OSMJS';
import * as OSMB from '@community-garden/osmbuildings';

@Component({
  selector: 'app-osm-building',
  templateUrl: './osm-building.component.html',
  styleUrls: ['./osm-building.component.css', './OSMBuildings.css'],
})
export class OsmBuildingComponent implements OnInit {
  ngOnInit(): void {
    // const map = new OSMBuildings({ container: 'map' });
    // map.addMapTiles('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  }
}
