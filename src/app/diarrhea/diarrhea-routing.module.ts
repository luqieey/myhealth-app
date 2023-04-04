import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarrheaPage } from './diarrhea.page';

const routes: Routes = [
  {
    path: '',
    component: DiarrheaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarrheaPageRoutingModule {}
