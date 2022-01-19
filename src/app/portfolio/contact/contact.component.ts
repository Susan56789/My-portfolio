import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  FormData!: FormGroup;

  submitted = false;

  get f() {
    return this.FormData.controls;
  }

  constructor(
    private meta: Meta,
    private title: Title,
    private formBuilder: FormBuilder,
    private contact: ContactService
  ) {
    this.meta.addTags([
      { name: 'Susan Wairimu', content: 'Contact Details' },
      { name: 'keywords', content: 'Front-end Developer' },
    ]);
    this.title.setTitle('Susan Wairimu');
  }

  onSubmit(FormData: FormGroup) {
    //console.log(FormData);

    this.contact.postMessage(FormData).subscribe(
      (response) => {
        location.href = '#contact';

        console.log(response);
        return response;
      },
      (error: any) => {
        console.warn(error.responseText);
        console.log({ error });
      }
    );

    this.submitted = true;

    this.FormData.reset();
  }

  ngOnInit(): void {
    this.FormData = this.formBuilder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Message: new FormControl('', [Validators.required]),
    });
  }
}
