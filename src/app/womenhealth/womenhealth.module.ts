import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WomenhealthPageRoutingModule } from './womenhealth-routing.module';

import { WomenhealthPage } from './womenhealth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WomenhealthPageRoutingModule
  ],
  declarations: [WomenhealthPage]
})
export class WomenhealthPageModule {}
