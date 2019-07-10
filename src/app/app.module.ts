import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TaskComponent } from './task/task.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule }  from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TaskComponent,
    TeamComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
