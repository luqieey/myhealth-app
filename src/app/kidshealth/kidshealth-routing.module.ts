import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidshealthPage } from './kidshealth.page';

const routes: Routes = [
  {
    path: '',
    component: KidshealthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidshealthPageRoutingModule {}
