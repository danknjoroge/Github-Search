import { Component, OnInit } from '@angular/core';
import { SearchRequestService } from '../search-request.service';
import {Repository} from '../classes/repository'
import {User} from 'src/app/classes/user'

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  

  public searchMe= 'danknjoroge';
  public githubUser!: string;

  users!: User;
  repository!: Repository;
  public Searchrepo!: string;
  // public resultCount = 2;

  findUser(username: string){
    this.githubUser = '';
    this.searchMe = username;
    this.ngOnInit();
  }
  // searchRepos(){
  //   this.Searchrepo = '';
  //   this.resultCount=11;
  // }


  constructor(private searchRequestService: SearchRequestService, public userRepos:SearchRequestService) { }

  ngOnInit(): void {
    this.searchRequestService.githubUser(this.searchMe);
    this.users = this.searchRequestService.users;
    this.userRepos.gitUserRepos(this.searchMe);
    console.log(this.userRepos);
  }
}
