import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadachesPage } from './headaches.page';

const routes: Routes = [
  {
    path: '',
    component: HeadachesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadachesPageRoutingModule {}
