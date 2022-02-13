import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  [x: string]: any;

  username!:string;

  
  @Output() getName = new EventEmitter<string>();
  search(username: string) {
    this.getName.emit(username);
    this.username ='';
    if(username ===''){
      alert('Please enter a Github username');
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
