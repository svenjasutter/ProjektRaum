import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-building-info',
  templateUrl: './building-info.component.html',
  styleUrls: ['./building-info.component.css'],
})
export class BuildingInfoComponent {
  buildings = [
    'Gebäude 1',
    'Gebäude 2',
    'Gebäude 3',
    'Gebäude 4',
    'Gebäude 5',
    'Gebäude 6',
    'Gebäude 7',
    'Gebäude 8',
  ];
}
