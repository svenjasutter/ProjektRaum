import { Component, ViewChildren, QueryList } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-building-info',
  templateUrl: './building-info.component.html',
  styleUrls: ['./building-info.component.css'],
})
export class BuildingInfoComponent {
  @ViewChildren(MatExpansionPanel) panels!: QueryList<MatExpansionPanel>;

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.mapService.buildingSelected$.subscribe((tag) => {
      this.expandBuildingByTag(tag);
    });
  }

  ngAfterViewInit(): void {
    this.panels.forEach((panel, index) => {
      panel.opened.subscribe(() => {
        console.log(`Panel with tag ${this.buildings[index].tag} opened`);
        this.mapService.selectBuilding(this.buildings[index].tag);
      });
      panel.closed.subscribe(() => {
        // console.log(`Panel with tag ${this.buildings[index].tag} closed`);
      });
    });
  }

  buildings = [
    { name: 'Gebäude 1', tag: 'b1' },
    { name: 'Gebäude 2', tag: 'b2' },
    { name: 'Gebäude 3', tag: 'b3' },
    { name: 'Gebäude 4', tag: 'b4' },
    { name: 'Gebäude 5', tag: 'b5' },
    { name: 'Gebäude 6', tag: 'b6' },
    { name: 'Gebäude 8', tag: 'b8' },
  ];

  expandBuildingByTag(tag: string) {
    const buildingToExpand = this.buildings.find(
      (building) => building.tag === tag
    );

    if (buildingToExpand) {
      this.panels.toArray().forEach((panel, index) => {
        if (this.buildings[index].tag === tag) {
          panel.open();
        } else {
          panel.close();
        }
      });
    }
  }
}
