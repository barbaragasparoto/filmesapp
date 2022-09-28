import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BelaAdormecidaPage } from './bela-adormecida.page';

const routes: Routes = [
  {
    path: '',
    component: BelaAdormecidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BelaAdormecidaPageRoutingModule {}
