import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  menuActive(){
    document.getElementById('menu')?.classList.toggle('menu-active');
    }
  constructor() { }

  ngOnInit(): void {
  }

}
