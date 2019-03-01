import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TilesComponent } from './tiles/tiles.component';
import { LoginComponent } from './login/login.component';
import { StatusPipe } from './pipes/status.pipe';
import { TileComponent } from './tiles/tile/tile.component';


@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    LoginComponent,
    StatusPipe,
    TileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [TilesComponent]
})
export class AppModule { }
