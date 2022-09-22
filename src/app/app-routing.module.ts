import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'bela-e-a-fera',
    loadChildren: () => import('./bela-e-a-fera/bela-e-a-fera.module').then( m => m.BelaEAFeraPageModule)
  },  {
    path: 'cinderela',
    loadChildren: () => import('./cinderela/cinderela.module').then( m => m.CinderelaPageModule)
  },
  {
    path: 'branca-de-neve',
    loadChildren: () => import('./branca-de-neve/branca-de-neve.module').then( m => m.BrancaDeNevePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
