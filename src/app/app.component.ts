import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Angular 7 Development';
  order = {
    date:"feb 9 2019",
    total:2000,
    shipto:'abc',
    name:"swaths bags"
  }

  orders = [{
    date:"feb 9 2019",
    total:2000,
    shipto:'abc',
    name:"swaths bags"
  },
  {
    date:"feb 9 2019",
    total:2000,
    shipto:'abc',
    name:"swaths bags"
  },
  {
    date:"feb 9 2019",
    total:2000,
    shipto:'abc',
    name:"swaths bags"
  }
]

returnProduct(){
  console.log('product returned');
}

}
