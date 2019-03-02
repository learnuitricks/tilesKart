import { Injectable } from '@angular/core';
import { ITile } from '../itile';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TileService {

  tiles:Array<ITile> =[];
    
  tileURL:string = "http://demo5911200.mockable.io/tiles";
  constructor(private httpClient:HttpClient) { }

  getTiles(): Observable<Array<ITile>>{
    // we need to call back end api get the data and return that data.
   return this.httpClient.get<Array<ITile>>(this.tileURL);
    //return this.tiles;
  }

  getFilteredTiles(filterOption,filterText):Array<ITile>{

    var fTiles:Array<ITile>;

    fTiles =  this.tiles.filter(function(tile){
        if(filterOption=="name"){
          if(tile.name.indexOf(filterText)>=0){
            return true;
          }
          else{
            return false;
          }
        }
    });

    return fTiles;

   }

 
}
