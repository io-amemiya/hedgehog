// Module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Component
import { MainMenuComponent } from '../app/pages/main-menu/main-menu.component';

const routes: Routes = [
  // メインページ
  { path: '', redirectTo: 'main-menu', pathMatch: 'full' },
  { path: '**', redirectTo: 'main-menu', pathMatch: 'full' },
  // サブページ
  { path: 'main-menu', component: MainMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
