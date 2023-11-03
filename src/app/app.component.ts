import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
posts = [
  {
     title:"Biking",
     image:'assets/biking.jpeg',
  },{
    title:"Mountain",
    image:'assets/mountain.jpeg',
  },
  {
    title:"Tree",
    image:'assets/tree.jpeg',
  }
]
}
