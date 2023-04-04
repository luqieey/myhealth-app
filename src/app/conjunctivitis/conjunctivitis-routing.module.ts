import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConjunctivitisPage } from './conjunctivitis.page';

const routes: Routes = [
  {
    path: '',
    component: ConjunctivitisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConjunctivitisPageRoutingModule {}
