import { Component, OnInit } from '@angular/core';
import { BioService } from 'src/app/core/services/bio.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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
    this.title.setTitle('Susan Wairimu');
  }

  ngOnInit(): void {}
}
