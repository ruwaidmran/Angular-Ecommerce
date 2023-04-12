import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// import { httModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@NgModule({
declarations: [AppComponent, ServersComponent, ServerComponent, SuccessAlertComponent,],
  imports: [BrowserModule, AppRoutingModule, FormsModule /*httpModule*/],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
