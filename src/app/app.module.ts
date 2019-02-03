// module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// component
import { AppComponent } from './app.component';
import { MainMenuComponent } from '../app/pages/main-menu/main-menu.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, MainMenuComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}