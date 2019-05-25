import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RetroLinkedinComponent } from './retro-linkedin/retro-linkedin.component';
import { RetroTechLinksComponent } from './retro-tech-links/retro-tech-links.component';
import { RetroHeadlinerComponent } from './retro-headliner/retro-headliner.component';
import { RetroProjectsComponent } from './retro-projects/retro-projects.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, RetroTechLinksComponent, RetroLinkedinComponent, RetroHeadlinerComponent, RetroProjectsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
