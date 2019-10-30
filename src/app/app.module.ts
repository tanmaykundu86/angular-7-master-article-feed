import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import {TabViewModule} from 'primeng/tabview';

import { AppComponent } from './app.component';
import { FeedsComponent } from './article/feeds/feeds.component';
import { MyarticleComponent } from './article/myarticle/myarticle.component';
import { DataService } from './data.service';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, TabViewModule],
  declarations: [ AppComponent, FeedsComponent, MyarticleComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ HttpClientModule, HttpClient, HttpHandler, DataService]
})
export class AppModule { }
 