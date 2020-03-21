import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LandingComponent } from './works/landing/landing.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WorksComponent } from './works/works.component';
import { WorkComponent } from './works/work/work.component';
import { ProjectsComponent } from './works/projects/projects.component';
import { AboutComponent } from './works/about/about.component';
import { PlayComponent } from './play/play.component';
import { SkillsComponent } from './works/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    FooterComponent,
    WorksComponent,
    WorkComponent,
    ProjectsComponent,
    AboutComponent,
    PlayComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
