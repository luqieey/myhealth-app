import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'mainpage',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'mainpage',
    loadChildren: () => import('./mainpage/mainpage.module').then( m => m.MainpagePageModule)
  },
  {
    path: 'allergies',
    loadChildren: () => import('./allergies/allergies.module').then( m => m.AllergiesPageModule)
  },
  {
    path: 'common-illness',
    loadChildren: () => import('./common-illness/common-illness.module').then( m => m.CommonIllnessPageModule)
  },
  {
    path: 'coldsandflu',
    loadChildren: () => import('./coldsandflu/coldsandflu.module').then( m => m.ColdsandfluPageModule)
  },
  {
    path: 'conjunctivitis',
    loadChildren: () => import('./conjunctivitis/conjunctivitis.module').then( m => m.ConjunctivitisPageModule)
  },
  {
    path: 'diarrhea',
    loadChildren: () => import('./diarrhea/diarrhea.module').then( m => m.DiarrheaPageModule)
  },
  {
    path: 'headaches',
    loadChildren: () => import('./headaches/headaches.module').then( m => m.HeadachesPageModule)
  },
  {
    path: 'sore',
    loadChildren: () => import('./sore/sore.module').then( m => m.SorePageModule)
  },
  {
    path: 'sorethroat',
    loadChildren: () => import('./sorethroat/sorethroat.module').then( m => m.SorethroatPageModule)
  },
  {
    path: 'healthydiet',
    loadChildren: () => import('./healthydiet/healthydiet.module').then( m => m.HealthydietPageModule)
  },
  {
    path: 'menhealth',
    loadChildren: () => import('./menhealth/menhealth.module').then( m => m.MenhealthPageModule)
  },
  {
    path: 'womenhealth',
    loadChildren: () => import('./womenhealth/womenhealth.module').then( m => m.WomenhealthPageModule)
  },
  {
    path: 'kidshealth',
    loadChildren: () => import('./kidshealth/kidshealth.module').then( m => m.KidshealthPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'usermanual',
    loadChildren: () => import('./usermanual/usermanual.module').then( m => m.UsermanualPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
