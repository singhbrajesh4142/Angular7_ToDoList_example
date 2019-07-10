import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskComponent } from './task/task.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'task', component:TaskComponent},
  {path:'team', component:TeamComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
