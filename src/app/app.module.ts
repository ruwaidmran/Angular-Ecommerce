import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { httModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ServersComponent } from './servers/servers.component';
import { StudentsComponent } from './students/students.component';
import { SecondayTeacherComponent } from './seconday-teacher/seconday-teacher.component';
import { SupportComponent } from './support/support.component';
@NgModule({
  declarations: [AppComponent, ServersComponent, StudentsComponent, SecondayTeacherComponent, SupportComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule /*httpModule*/],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
