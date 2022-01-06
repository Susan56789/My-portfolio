import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { HeaderService } from '../../core/services/header.service';
import { ProjectsService } from '../../core/services/projects.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  isHome$ = this.headerService.isHome();
  projects$ = this.isHome$.pipe(
    mergeMap((atHome) => this.projectsService.getProjects(atHome))
  );

  respOptions = [
    {
      viewClasses: 'd-none d-md-flex',
      displayInColumn: false,
      useSmallerHeadings: false,
      titleClasses: 'display-3',
    },
    {
      viewClasses: 'd-flex d-md-none',
      displayInColumn: true,
      useSmallerHeadings: true,
      titleClasses: '',
    },
  ];

  constructor(
    private projectsService: ProjectsService,
    private headerService: HeaderService,
    private meta: Meta,
    private title: Title
  ) {
    this.meta.addTags([
      { name: 'Susan Wairimu', content: 'My Projects' },
      { name: 'keywords', content: 'Front-end Developer' },
    ]);
    this.title.setTitle('Susan Wairimu Projects');
  }

  ngOnInit(): void {}
}
