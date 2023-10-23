import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { InfosComponent } from './views/infos/infos.component';
import { NewsComponent } from './views/news/news.component';
import { FeedbackComponent } from './views/feedback/feedback.component';
import { ProjectsComponent } from './views/projects/projects.component';

const routes: Routes = [{ path: 'home', component: HomeComponent }, { path: 'projects', component: ProjectsComponent }, { path: 'infos', component: InfosComponent }, { path: 'news', component: NewsComponent }, { path: 'feedback', component: FeedbackComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
