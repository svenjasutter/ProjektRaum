import { Component, ViewChildren, QueryList } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-projects-info',
  templateUrl: './projects-info.component.html',
  styleUrls: ['./projects-info.component.css'],
})
export class ProjectsInfoComponent {
  @ViewChildren(MatExpansionPanel) panels!: QueryList<MatExpansionPanel>;

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.mapService.buildingSelected$.subscribe((tag) => {
      this.expandProjectsByTag(tag);
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
    { name: 'Gebäude 9', tag: 'b9' },
    { name: 'Gebäude 10', tag: 'b10' },
    { name: 'Gebäude 11', tag: 'b11' },
  ];

  expandProjectsByTag(tag: string) {
    const buildingToExpand = this.buildings.find(
      (buildings) => buildings.tag === tag
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
