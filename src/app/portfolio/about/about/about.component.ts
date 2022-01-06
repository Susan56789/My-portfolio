import { Component, OnInit } from '@angular/core';
import { BioService } from 'src/app/core/services/bio.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  bio$ = this.bioService.getBio();

  respOptions = [
    {
      viewClasses: 'd-none d-md-flex',
      headingClass: 'display-3',
      useSmallerHeadings: false,
    },
    {
      viewClasses: 'd-flex d-md-none',
      headingClass: '',
      useSmallerHeadings: true,
    },
  ];

  constructor(
    private bioService: BioService,
    private meta: Meta,
    private title: Title
  ) {
    this.meta.addTags([
      { name: 'Susan Wairimu', content: 'My portfolio website' },
      { name: 'keywords', content: 'Front-end Developer' },
    ]);
    this.title.setTitle('About Me');
  }

  ngOnInit(): void {}
}
