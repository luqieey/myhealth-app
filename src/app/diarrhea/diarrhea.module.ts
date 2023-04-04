import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarrheaPageRoutingModule } from './diarrhea-routing.module';

import { DiarrheaPage } from './diarrhea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiarrheaPageRoutingModule
  ],
  declarations: [DiarrheaPage]
})
export class DiarrheaPageModule {}
