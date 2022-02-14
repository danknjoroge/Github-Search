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
      environment.apiUrl).toPromise().then(response=> {
        this.users.name = response!.name;
        this.users.html_url = response!.html_url;
        this.users.login = response!.login;
        this.users.avatar_url = response!.avatar_url;
        this.users.public_repos = response!.public_repos;
        this.users.created_at = response!.created_at;
        this.users.followers = response!.followers;
        this.users.following = response!.following;
        resolve();
      })
    });
    return promise;
  }



  gitUserRepos(searchMe: string) 
    {
        interface ApiResponse {
          
            name: string;
            description: string;
            created_at: Date;
        }

        const myPromise = new Promise((resolve, reject) => {
            this.http.get<ApiResponse>('https://api.github.com/users/' + searchMe + '/repos?order=created&sort=asc?access_token=' + environment.apiUrl).toPromise().then(getRepoResponse => {
                this.newRepository = getRepoResponse;
                resolve(myPromise);
            }, error => {
                reject(error);
            });
        });
        return myPromise;
    }


    gitRepos(searchName: string) {
        interface ApiResponse {
            items: any;
        }

        const promise = new Promise((resolve, reject) => {
            this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + searchName + ' &per_page=10 ' + environment.apiUrl).toPromise().then(getRepoResponse => {
                this.searchRepo = getRepoResponse!.items;

                resolve(promise);
            }, error => {
                this.searchRepo = 'error';
                reject(error);
            });
        });
        return promise;
    }
}
