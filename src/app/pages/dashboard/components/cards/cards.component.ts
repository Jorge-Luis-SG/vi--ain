import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'] 
})
export class CardsComponent implements OnInit {
 @Input() bg = '';
  @Input() title = '';
  @Input() eth = '';
  @Input() price = '';
  @Input() view = '';
  @Input() likes = '';


  constructor() {

  }

  collection(bg, title, eth, price, view, likes) {
    let nftData = {
      bg: bg,
      title: title,
      eth: eth,
      price: price,
      view: view,
      likes: likes
    };
    let data = localStorage.setItem('collection', JSON.stringify(nftData));
  }

  ngOnInit(): void {}
}

