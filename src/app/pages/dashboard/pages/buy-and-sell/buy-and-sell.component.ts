import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-and-sell',
  templateUrl: './buy-and-sell.component.html',
  styleUrls: ['./buy-and-sell.component.scss']
})
export class BuyAndSellComponent implements OnInit {


  bg = '';
  title = '';
  eth = '';
  price = '';
  view = '';
  likes = '';

  constructor() {
    // let datanft = JSON.parse((localStorage.getItem('collection')));

     let datanft = localStorage.getItem('collection') ;

     if(datanft !== null){
       let data = JSON.parse(datanft);
       this.bg = data.bg;
       this.title = data.title;
       this.eth = data.eth;
       this.price = data.price;
       this.view = data.view;
       this.likes = data.likes;
     }

  }

  collectionPrice = '';
  ngOnInit(): void {}
}

