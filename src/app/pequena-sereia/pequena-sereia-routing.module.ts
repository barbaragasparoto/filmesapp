import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PequenaSereiaPage } from './pequena-sereia.page';

const routes: Routes = [
  {
    path: '',
    component: PequenaSereiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PequenaSereiaPageRoutingModule {}
