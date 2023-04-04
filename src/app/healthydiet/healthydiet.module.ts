import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthydietPageRoutingModule } from './healthydiet-routing.module';

import { HealthydietPage } from './healthydiet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthydietPageRoutingModule
  ],
  declarations: [HealthydietPage]
})
export class HealthydietPageModule {}
