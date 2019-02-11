// module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AccordionModule, CollapseModule, PopoverModule, BsDropdownModule } from 'ngx-bootstrap';
// component
import { AppComponent } from './app.component';
import { MainMenuComponent } from '../app/pages/main-menu/main-menu.component';
import { WorkingTimeMenuComponent } from '../app/pages/app-recog/working-time-menu/working-time-menu.component';
import { WorkingTimeComponent } from '../app/pages/app-recog/working-time/working-time.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  declarations: [
    AppComponent,
    MainMenuComponent,
    WorkingTimeMenuComponent,
    WorkingTimeComponent
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
