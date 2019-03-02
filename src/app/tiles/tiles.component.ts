import { Component, OnInit } from '@angular/core';
import { ITile } from '../itile';
import { TileService } from '../services/tile.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  imagePath:string = "assets/images/";
  shoppingDate:Date = new Date();
  filterOptions =['price','name','availbility'];
  filterText:string = '';
  selectedFilter ='name';

  tiles:Array<ITile>=[];
  
  filteredTiles: ITile[];
 
  constructor(private tileService:TileService) {
   }

   ngOnInit(){
      this.tileService.getTiles().subscribe((tilesData)=>{
          this.tiles = tilesData;
          this.filteredTiles = this.tiles;
     });
 
   }


   filterTiles(){
     this.filteredTiles = this.tileService.getFilteredTiles(this.selectedFilter,this.filterText);
   }

   





}
