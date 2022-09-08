import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BelaEAFeraPageRoutingModule } from './bela-e-a-fera-routing.module';

import { BelaEAFeraPage } from './bela-e-a-fera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BelaEAFeraPageRoutingModule
  ],
  declarations: [BelaEAFeraPage]
})
export class BelaEAFeraPageModule {}
