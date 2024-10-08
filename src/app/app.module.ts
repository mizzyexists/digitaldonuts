import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { LockedComponent } from './components/locked/locked.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoreArtistsComponent } from './pages/core-artists/core-artists.component';
import { CharityComponent } from './pages/charity/charity.component';
import { LoreComponent } from './pages/lore/lore.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoaderComponent,
    LockedComponent,
    FooterComponent,
    CoreArtistsComponent,
    CharityComponent,
    LoreComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HotToastModule.forRoot(
       {
         position: 'top-center',
         dismissible: true,
         duration: 5000,
         theme:'snackbar',
         style: {
           textAlign: 'center'
         }
       }
     )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
