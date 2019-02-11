// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Component
import { MainMenuComponent } from '../app/pages/main-menu/main-menu.component';
import { WorkingTimeMenuComponent } from '../app/pages/app-recog/working-time-menu/working-time-menu.component';
import { WorkingTimeComponent } from '../app/pages/app-recog/working-time/working-time.component';

const routes: Routes = [
  // メインページ
  { path: '', redirectTo: 'main-menu', pathMatch: 'full' },
  // メインメニュー
  { path: 'main-menu', component: MainMenuComponent },
  // 申請・承認メニュー
  { path: 'working-time-menu', component: WorkingTimeMenuComponent },
  { path: 'working-time', component: WorkingTimeComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
