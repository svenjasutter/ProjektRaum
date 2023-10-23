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
    this.mapService.projectsSelected$.subscribe((tag) => {
      this.expandProjectsByTag(tag);
    });
  }

  projects = [
    { name: 'Gebäude 1', content: 'Information zu Gebäude 1.', tag: 'b1' },
    { name: 'Gebäude 2', content: 'Information zu Gebäude 2.', tag: 'b2' },
    { name: 'Gebäude 3', content: 'Information zu Gebäude 3.', tag: 'b3' },
    { name: 'Gebäude 4', content: 'Information zu Gebäude 4.', tag: 'b4' },
    { name: 'Gebäude 5', content: 'Information zu Gebäude 5.', tag: 'b5' },
    { name: 'Gebäude 6', content: 'Information zu Gebäude 6.', tag: 'b6' },
    { name: 'Gebäude 7', content: 'Information zu Gebäude 7.', tag: 'b7' },
    { name: 'Gebäude 8', content: 'Information zu Gebäude 8.', tag: 'b8' },
  ];

  expandProjectsByTag(tag: string) {
    const buildingToExpand = this.projects.find(
      (projects) => projects.tag === tag
    );

    if (buildingToExpand) {
      this.panels.toArray().forEach((panel, index) => {
        if (this.projects[index].tag === tag) {
          panel.open();
        } else {
          panel.close();
        }
      });
    }
  }
}
