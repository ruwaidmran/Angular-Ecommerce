import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { httModule } from '@angular/htt';
import { FormsModule } from '@angular/forms';
import { ServersComponent } from './servers/servers.component';


@NgModule({
  declarations: [AppComponent, ServersComponent],
  imports: [BrowserModule, AppRoutingModule, /*FormsModule, httpModule*/],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
