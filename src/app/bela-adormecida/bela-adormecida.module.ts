import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BelaAdormecidaPageRoutingModule } from './bela-adormecida-routing.module';

import { BelaAdormecidaPage } from './bela-adormecida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BelaAdormecidaPageRoutingModule
  ],
  declarations: [BelaAdormecidaPage]
})
export class BelaAdormecidaPageModule {}
