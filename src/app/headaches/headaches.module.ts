import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeadachesPageRoutingModule } from './headaches-routing.module';

import { HeadachesPage } from './headaches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeadachesPageRoutingModule
  ],
  declarations: [HeadachesPage]
})
export class HeadachesPageModule {}
