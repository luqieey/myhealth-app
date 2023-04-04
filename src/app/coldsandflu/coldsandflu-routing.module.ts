import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColdsandfluPage } from './coldsandflu.page';

const routes: Routes = [
  {
    path: '',
    component: ColdsandfluPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColdsandfluPageRoutingModule {}
