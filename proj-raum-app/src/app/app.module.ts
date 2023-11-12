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
import { MapComponent } from './components/map/map.component';
import { BuildingInfoComponent } from './components/building-info/building-info.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MapService } from './services/map.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FeedbackComponent } from './views/feedback/feedback.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NgOptimizedImage } from '@angular/common'
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { ProjectsComponent } from './views/projects/projects.component';
import { ProjectsInfoComponent } from './components/projects-info/projects-info.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogCampusImageComponent } from './components/dialog-campus-image/dialog-campus-image.component';
import { DialogCampusComponent } from './components/dialog-campus/dialog-campus.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MapComponent,
    BuildingInfoComponent,
    FeedbackComponent,
    ProjectsComponent,
    ProjectsInfoComponent,
    DialogCampusImageComponent,
    DialogCampusComponent,
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
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDialogModule
  ],
  providers: [MapService],
  bootstrap: [AppComponent],
})
export class AppModule {}
