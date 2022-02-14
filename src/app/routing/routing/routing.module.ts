import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

import { RepositoryComponent } from 'src/app/repository/repository.component';
import { UserComponent } from 'src/app/user/user.component';
import { RoutingRoutingModule } from './routing-routing.module';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'repository', component: RepositoryComponent},
  { path: '', redirectTo:"/user", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},
];
@NgModule({
  declarations: [],
  imports: [
    RoutingRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
