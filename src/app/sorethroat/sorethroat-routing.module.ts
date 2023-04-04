import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SorethroatPage } from './sorethroat.page';

const routes: Routes = [
  {
    path: '',
    component: SorethroatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SorethroatPageRoutingModule {}
