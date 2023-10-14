import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './views/home/home.component';
import { OsmBuildingComponent } from './components/osm-building/osm-building.component';
import { MyMapComponent } from './components/my-map/my-map.component';
import { MyMap2Component } from './components/my-map2/my-map2.component';
import { MyMap3Component } from './components/my-map3/my-map3.component';
// import { OsmbModule } from '@community-garden/osmbuildings';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {MatFormFieldModule } from '@angular/material/form-field';
import { FeedbackComponent } from './views/feedback/feedback.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    OsmBuildingComponent,
    MyMapComponent,
    MyMap2Component,
    MyMap3Component,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LeafletModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule, 
    NgIf,
    ReactiveFormsModule,
    // OsmbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
