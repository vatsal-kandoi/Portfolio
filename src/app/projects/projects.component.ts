import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
  <div class="row fullHeight noPadding">
    <div class="fullHeight col s12 navigator">
      <div class="row">
        <app-project [project]="currentDisplay"></app-project>
      </div>
      <div class="prev"><i class="fas fa-chevron-up"></i></div>
      <div class="next"><i class="fas fa-chevron-down"></i></div>
      <div class="nav-circles">
        <div class="item" *ngFor="let project of projects">
        <div class="circle"  [ngClass]="{active: project === currentDisplay }" (click)="onNavChange(project)" ></div>
        <div class="date">{{ project.tech }}</div></div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [{
    name: 'Lakshmipat Singhania Academy',
    org: 'Kolkata',
    date: 'APRIL 2003 - MAY 2017',
    tech: 'NODE.JS',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsa illo laborum eveniet amet sed in fuga dolores laboriosam,quaerat
    magni molestias sunt deserunt esse ut quam tempora quo, voluptate excepturi.`
  }];

  currentDisplay: { name: string, tech: string, org: string, date: string, description: string };
  constructor() {
  }

  ngOnInit() {
    this.currentDisplay = this.projects[0];
  }
  onNavChange(data: { name: string, tech: string, org: string, date: string, description: string }) {
    this.currentDisplay = data;
  }
}