import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent implements OnInit {
  userSearch: string;

  constructor() { }

  ngOnInit() {
  }

  logInputValue() {
    console.log(this.userSearch);
  }
}
