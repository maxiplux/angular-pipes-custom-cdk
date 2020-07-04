import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CapitalizadoPipe} from './pipes/capitalizado.pipe';
import {DomseguroPipe} from './pipes/domseguro.pipe';
import {ContrasenaPipe} from './pipes/contrasena.pipe';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';


import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { CustompipescomponentComponent } from './custompipescomponent/custompipescomponent.component';

registerLocaleData(localEs);
registerLocaleData(localFr);



@NgModule({
  declarations: [
    AppComponent,

    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe,
    VirtualScrollComponent,
    CustompipescomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    DragDropModule,
    HttpClientModule

  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
