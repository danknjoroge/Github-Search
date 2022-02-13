import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  [x: string]: any;

  // searchInfo = new Search('');
  username!:string;

  
  @Output() getName = new EventEmitter<string>();
  search(username: string) {
    this.getName.emit(username);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
