import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WomenhealthPage } from './womenhealth.page';

const routes: Routes = [
  {
    path: '',
    component: WomenhealthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WomenhealthPageRoutingModule {}
