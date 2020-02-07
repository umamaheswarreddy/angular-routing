import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { observable, from } from 'rxjs';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import {PagenotfoundComponent} from './pagenotfound/./pagenotfound.component';


const routes: Routes = [ {path:"",component:DashBoardComponent}, 
{path:"pdm",component:ObservableDemoComponent},{path:'**',component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
