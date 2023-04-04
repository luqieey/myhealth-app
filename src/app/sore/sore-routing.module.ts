import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SorePage } from './sore.page';

const routes: Routes = [
  {
    path: '',
    component: SorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SorePageRoutingModule {}
