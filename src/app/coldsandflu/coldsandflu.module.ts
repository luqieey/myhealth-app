import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColdsandfluPageRoutingModule } from './coldsandflu-routing.module';

import { ColdsandfluPage } from './coldsandflu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColdsandfluPageRoutingModule
  ],
  declarations: [ColdsandfluPage]
})
export class ColdsandfluPageModule {}
