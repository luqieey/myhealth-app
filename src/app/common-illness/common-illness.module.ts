import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonIllnessPageRoutingModule } from './common-illness-routing.module';

import { CommonIllnessPage } from './common-illness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonIllnessPageRoutingModule
  ],
  declarations: [CommonIllnessPage]
})
export class CommonIllnessPageModule {}
