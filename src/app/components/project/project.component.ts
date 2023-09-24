import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from 'src/app/model/project.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Output()
  public backClicked = new EventEmitter<void>();

  @Input()
  public project: Project | undefined;

  constructor() { }

  public handleBackClicked(): void {
    this.backClicked.next();
  }
}
