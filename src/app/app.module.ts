import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TilesComponent } from './tiles/tiles.component';
import { LoginComponent } from './login/login.component';
import { StatusPipe } from './pipes/status.pipe';
import { TileComponent } from './tiles/tile/tile.component';
import { StarComponent } from './star/star.component';
import { WelcomeComponent } from './welcome/welcome.component';

const tileKartRoutes:Routes=[
  {path:'welcome',component:WelcomeComponent},
  {path:'tiles',component:TilesComponent},
  {path:'login',component:LoginComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'', pathMatch:'prefix', redirectTo:'welcome'},
  {path:'**', redirectTo:'welcome;'},
  
]


@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    LoginComponent,
    StatusPipe,
    TileComponent,
    StarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(tileKartRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
