import { SearchRequestService } from '../search-request.service';
import { Component, OnInit } from '@angular/core';
import {Repository} from '../classes/repository'
import {User} from 'src/app/classes/user'
// import {SearchRequestService} from '../services/search_request'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public searchMe= 'danknjoroge';
  public githubUser!: string;

  users!: User;
  repository!: Repository;
  public Searchrepo!: string;
  

  findUser(username: string){
    this.githubUser = '';
    this.searchMe = username;
    this.ngOnInit();
  }

  constructor(private searchRequestService: SearchRequestService, public userRepos:SearchRequestService) { }

  ngOnInit(): void {
    this.searchRequestService.githubUser(this.searchMe);
    this.users = this.searchRequestService.users;
    this.userRepos.gitUserRepos(this.searchMe);
    console.log(this.userRepos);
  }

}
