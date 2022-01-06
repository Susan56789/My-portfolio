import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-landing',
  templateUrl: './blog-landing.component.html',
  styleUrls: ['./blog-landing.component.css'],
})
export class BlogLandingComponent implements OnInit {
  links$ = this.scully.available$.pipe(
    map((routes) =>
      routes.filter((route: ScullyRoute) => route.route.startsWith('/blog/'))
    )
  );

  respOptions = [
    {
      viewClasses: 'd-none d-md-flex',
      displayInColumn: false,
      titleClasses: 'display-3',
    },
    {
      viewClasses: 'd-flex d-md-none',
      displayInColumn: true,
      titleClasses: '',
    },
  ];

  constructor(
    private scully: ScullyRoutesService,
    private meta: Meta,
    private title: Title
  ) {
    this.meta.addTags([
      { name: 'Susan Wairimu', content: 'Blog' },
      { name: 'keywords', content: 'Blog Posts' },
    ]);
    this.title.setTitle('Susan Wairimu Blog');
  }

  ngOnInit(): void {}
}
