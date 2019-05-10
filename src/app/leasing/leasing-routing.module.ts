import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeasingComponent } from './leasing.component';


const routes: Routes = [
  {
    path: '',
    component: LeasingComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LeasingRoutingModule {}
