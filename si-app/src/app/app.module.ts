import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PriceComponent } from './price/price.component';
import { StartComponent } from './start/start.component';

import { SrvService } from './srv.service';

const appRoutes: Routes = [
  { path: '', component: StartComponent },
  { path: 'data',      component: PriceComponent },
  { path: '**', component: StartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    PriceComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, MatButtonModule, MatCheckboxModule, MatIconModule, RouterModule.forRoot(appRoutes, { useHash: true }), MatInputModule, BrowserAnimationsModule
  , FormsModule ],
  providers: [SrvService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
