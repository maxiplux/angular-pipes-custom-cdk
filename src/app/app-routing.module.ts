import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VirtualScrollComponent} from './virtual-scroll/virtual-scroll.component';
import {CustompipescomponentComponent} from './custompipescomponent/custompipescomponent.component';


const routes: Routes = [
  {path: 'virtual-scroll', component: VirtualScrollComponent},
  {path: 'pipes', component: CustompipescomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
