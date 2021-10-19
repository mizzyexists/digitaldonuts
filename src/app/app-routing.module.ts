import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoreArtistsComponent } from './pages/core-artists/core-artists.component';
import { CharityComponent } from './pages/charity/charity.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'core-artists', component: CoreArtistsComponent},
  { path: 'charity', component: CharityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
