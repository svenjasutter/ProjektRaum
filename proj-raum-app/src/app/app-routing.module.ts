import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { InfosComponent } from './views/infos/infos.component';
import { NewsComponent } from './views/news/news.component';
import { FeedbackComponent } from './views/feedback/feedback.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { FeedbackProjectComponent } from './views/feedback-projects/feedback-projects.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'projects', component: ProjectsComponent }, { path: 'infos', component: InfosComponent }, { path: 'news', component: NewsComponent }, { path: 'feedback', component: FeedbackComponent }, { path: 'feedback-projects', component: FeedbackProjectComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
