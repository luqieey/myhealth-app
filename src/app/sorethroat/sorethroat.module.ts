import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SorethroatPageRoutingModule } from './sorethroat-routing.module';

import { SorethroatPage } from './sorethroat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SorethroatPageRoutingModule
  ],
  declarations: [SorethroatPage]
})
export class SorethroatPageModule {}
