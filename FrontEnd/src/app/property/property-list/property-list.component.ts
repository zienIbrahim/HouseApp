import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties:Array<any> =
  [
    {
      "Id":1,
      "Name":"Gasim House",
      "Type":"House",
      "Price":1200
    },
    {
      "Id":2,
      "Name":"Ahmed House",
      "Type":"House",
      "Price":1100
    },
    {
      "Id":3,
      "Name":"Omer House",
      "Type":"House",
      "Price":1000
    },
    {
      "Id":4,
      "Name":"Oasman House",
      "Type":"House",
      "Price":1200
    },
    {
      "Id":1,
      "Name":"Ali House",
      "Type":"House",
      "Price":1200
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
