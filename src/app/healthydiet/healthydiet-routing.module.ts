import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthydietPage } from './healthydiet.page';

const routes: Routes = [
  {
    path: '',
    component: HealthydietPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthydietPageRoutingModule {}
