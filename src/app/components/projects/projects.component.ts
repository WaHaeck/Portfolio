import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Project } from 'src/app/model/project.interface';
import { ProjectsService } from 'src/app/services/projects.service';

export interface RenderedProject {
  project: Project;
  isDisabled: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  private readonly _destroy$ = new Subject<void>();

  @Output()
  public projectClicked = new EventEmitter<Project>();

  private _selectedSkill = '';
  public get selectedSkill(): string {
    return this._selectedSkill;
  }
  private _skills: string[] = [];
  public get skills(): string[] {
    return this._skills;
  }

  private _highlightedSkills: string[] = [];
  public isHighlighted(skill: string): boolean {
    return this._highlightedSkills.includes(skill);
  }

  public get projects(): Project[] {
    return this._projects;
  }

  private _projects: Project[] = []

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _projectsService: ProjectsService,
  ) {
    this._projectsService.hightlightedProject$.pipe(takeUntil(this._destroy$)).subscribe(project => {
      this._highlightedSkills = project?.tags ?? [];
      this._changeDetectorRef.markForCheck();
    })

    this._projects = this._projectsService.projects;
    const skills = new Set<string>();
    for (const project of this._projects) {
      for (const skill of project.tags) {
        skills.add(skill);
      }
    }

    this._skills = Array.from(skills).sort();
  }

  public handleHover(skill: string): void {
    if (!this._selectedSkill)
      this._projectsService.HightlightSkill(skill);
  }

  public handleSkillClick(skill: string): void {
    if (this._selectedSkill === skill)
      this._selectedSkill = '';
    else this._selectedSkill = skill;

    this._projectsService.HightlightSkill(skill);
    this._changeDetectorRef.markForCheck();
  }

  public handleMouseLeft(): void {
    if (!this._selectedSkill)
      this._projectsService.HightlightSkill('');
  }

  public handleProjectClick(project: Project): void {
    this.projectClicked.next(project);
  }
}
