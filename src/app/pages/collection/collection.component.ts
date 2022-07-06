import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {


  listNft = [
    {
      id: 1,
      name: 'NFT 1',
      sc: '0x0',
      collection: "Collection 1",
      description: 'NFT 1 description',
      image: 'https://picsum.photos/200/300',
      price: '0.00',
    }, {
      id: 1,
      name: 'NFT 1',
      sc: '0x0',
      collection: "Collection 1",
      description: 'NFT 1 description',
      image: 'https://picsum.photos/200/300',
      price: '0.00',
    }, {
      id: 1,
      name: 'NFT 1',
      sc: '0x0',
      collection: "Collection 1",
      description: 'NFT 1 description',
      image: 'https://picsum.photos/200/300',
      price: '0.00',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
