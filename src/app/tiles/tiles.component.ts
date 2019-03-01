import { Component, OnInit } from '@angular/core';
import { ITile } from '../itile';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent  {
  imagePath:string = "assets/images/";
  shoppingDate:Date = new Date();
  filterOptions =['price','name','availbility'];
  filterText:string = '';
  selectedFilter ='name';

  // tiles:Array<ITile>=[]
  tiles:Array<ITile> =[
    {
      name:"nitco",
      model:"nit-01",
      price :100,
      rating:4,
      image:"tile1.jpg",
      status:0
    },
    {
      name:"johnson",
      model:"nit-02",
      price :101,
      rating:4,
      image:"tile2.jpg",
      status:1
    },
    {
      name:"khajaria",
      model:"nit-01",
      price :100,
      rating:4,
      image:"tile1.jpg",
      status:0
    },
    {
      name:"magificient2",
      model:"nit-02",
      price :101,
      rating:4,
      image:"tile2.jpg",
      status:1
    }]
  filteredTiles: ITile[];
 
 
 
  constructor() {
    this.filteredTiles = this.tiles;
   }


   filterTiles(){
     console.log("filter text is " + this.filterText );
     console.log("filter option is " + this.selectedFilter );
     this.filteredTiles = this.getFilteredTiles(this.selectedFilter,this.filterText);
     console.log(this.filteredTiles);
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
