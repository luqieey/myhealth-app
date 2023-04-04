import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SorePageRoutingModule } from './sore-routing.module';

import { SorePage } from './sore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SorePageRoutingModule
  ],
  declarations: [SorePage]
})
export class SorePageModule {}
