import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BelaEAFeraPage } from './bela-e-a-fera.page';

const routes: Routes = [
  {
    path: '',
    component: BelaEAFeraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BelaEAFeraPageRoutingModule {}
