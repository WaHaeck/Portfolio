import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.interface';
import { Subject, takeUntil, pipe } from 'rxjs';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit, OnDestroy {
  private readonly _destroy$ = new Subject<void>();

  @Input()
  public project: Project | undefined;

  private _isDisabled = false;
  public get isDisabled(): boolean {
    return this._isDisabled;
  }

  constructor(
    private _projectsService: ProjectsService,
    private _changeDetectorRef: ChangeDetectorRef) { }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public ngOnInit(): void {
    this._projectsService.hightlightedSkill$.pipe(takeUntil(this._destroy$)).subscribe(skill => {
      this._isDisabled = skill ? !this.project?.tags.includes(skill) : false;
      this._changeDetectorRef.markForCheck();
    })
  }

  public handleMouseLeft(): void {
    this._projectsService.HightlightProject(null);
  }

  public handleHover(): void {
    if (this.project)
      this._projectsService.HightlightProject(this.project);
  }
}
