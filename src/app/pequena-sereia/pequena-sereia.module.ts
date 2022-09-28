import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PequenaSereiaPageRoutingModule } from './pequena-sereia-routing.module';

import { PequenaSereiaPage } from './pequena-sereia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PequenaSereiaPageRoutingModule
  ],
  declarations: [PequenaSereiaPage]
})
export class PequenaSereiaPageModule {}
