import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.interface';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  viewProviders: [ProjectsService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public currentProject: Project | undefined;

  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }


  public handleProjectClicked(project: Project): void {
    this.currentProject = project;
    this._changeDetectorRef.markForCheck();
  }

  public handleBackClicked(): void {
    this.currentProject = undefined;
    this._changeDetectorRef.markForCheck();
  }
}
