import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenhealthPageRoutingModule } from './menhealth-routing.module';

import { MenhealthPage } from './menhealth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenhealthPageRoutingModule
  ],
  declarations: [MenhealthPage]
})
export class MenhealthPageModule {}
