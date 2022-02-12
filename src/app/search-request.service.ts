import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './classes/user';
import { Repository } from './classes/repository';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {
  repository!: Repository;
  users!: User;
  newRepository:any;
  searchRepo:any;
  

  getProfileReop:any;

  constructor(private http:HttpClient) {
    this.users = new User('', '', '',0 ,'', new Date(), 0,0);
    this.repository = new Repository('', '', '', new Date())
  }

  githubUser(searchName: string){
    interface ApiResponse {
      name: string;
            html_url: string;
            description: string;
            created_at: Date;
            login: string;
            public_repos: number;
            followers: number;
            following: number;
            avatar_url: string;
    }
    
    const promise = new Promise<void>((resolve) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + searchName + '?accessToken=' + 
      environment.apiUrl).toPromise().then(getResponse=> {
        this.users.name = getResponse!.name;
        this.users.html_url = getResponse!.html_url;
        this.users.login = getResponse!.login;
        this.users.avatar_url = getResponse!.avatar_url;
        this.users.public_repos = getResponse!.public_repos;
        this.users.created_at = getResponse!.created_at;
        this.users.followers = getResponse!.followers;
        this.users.following = getResponse!.following;
        resolve();
      })
    });
    return promise;
  }



  
}
