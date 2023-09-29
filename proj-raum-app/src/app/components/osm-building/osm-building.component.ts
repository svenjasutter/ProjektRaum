import { Component, OnInit, Inject, InjectionToken } from '@angular/core';

// This is a token to inject the OSM API URL into the component.
// It's a way to make the URL configurable.
const OSM_API_URL = new InjectionToken<string>('OSM_API_URL');

@Component({
  selector: 'app-osm-building',
  templateUrl: './osm-building.component.html',
  styleUrls: ['./osm-building.component.css'],
  providers: [
    {
      provide: OSM_API_URL,
      useValue: 'http://api06.dev.openstreetmap.org/api',
    },
  ],
})
export class OsmBuildingComponent implements OnInit {
  private url: string;

  constructor(@Inject(OSM_API_URL) apiUrl: string) {
    this.url = apiUrl;
  }

  ngOnInit(): void {
    console.log('OSM API URL:', this.url);
    // Here you can add any logic to interact with the OSM API using the URL.
  }
}
