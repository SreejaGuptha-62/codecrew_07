import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { FeaturesComponent } from './features/features.component';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:"app", component: AppComponent},
  { path: '', redirectTo: '/layout', pathMatch: 'full' }, // Default route
  { path: 'layout', component: LayoutComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'forum', component: ForumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
