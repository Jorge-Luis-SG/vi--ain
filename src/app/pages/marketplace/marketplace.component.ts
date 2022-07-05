import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {


  listCard = [{
    title: 'Card 1',
    description: 'This is a description',
    by: 'This is a bio',
    image1: './assets/img/collection.jpg',
    image2: './assets/img/collection.jpg',
    smartContract: '0x0',
  }, {
    title: 'Card 2',
    description: 'This is a description',
    by: 'This is a bio',
    image1: './assets/img/collection.jpg',
    image2: './assets/img/collection.jpg',
    smartContract: '0x0',
  }, {
    title: 'Card 3',
    description: 'This is a description',
    by: 'This is a bio',
    image1: './assets/img/collection.jpg',
    image2: './assets/img/collection.jpg',
    smartContract: '0x0',
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
