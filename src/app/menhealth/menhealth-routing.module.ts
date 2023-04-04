import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenhealthPage } from './menhealth.page';

const routes: Routes = [
  {
    path: '',
    component: MenhealthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenhealthPageRoutingModule {}
