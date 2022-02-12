import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import { Routes, RouterModule} from '@angular/router';
import { RepositoryComponent } from 'src/app/repository/repository.component';
import { UserComponent } from 'src/app/user/user.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'repository', component: RepositoryComponent},
  { path: '', redirectTo:"/user", pathMatch:"full"},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutingRoutingModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
