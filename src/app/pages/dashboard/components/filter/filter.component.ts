import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filter2 = "";
  @Input() filter3 = "";

  constructor() { }

  ngOnInit(): void {
  }

}
