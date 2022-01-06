import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      { name: 'Susan Wairimu', content: 'Contact Details' },
      { name: 'keywords', content: 'Front-end Developer' },
    ]);
    this.title.setTitle('Susan Wairimu');
  }

  ngOnInit(): void {}
}
