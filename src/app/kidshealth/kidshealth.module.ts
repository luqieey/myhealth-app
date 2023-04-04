import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidshealthPageRoutingModule } from './kidshealth-routing.module';

import { KidshealthPage } from './kidshealth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KidshealthPageRoutingModule
  ],
  declarations: [KidshealthPage]
})
export class KidshealthPageModule {}
