import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConjunctivitisPageRoutingModule } from './conjunctivitis-routing.module';

import { ConjunctivitisPage } from './conjunctivitis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConjunctivitisPageRoutingModule
  ],
  declarations: [ConjunctivitisPage]
})
export class ConjunctivitisPageModule {}
