import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dark-mode-toggle',
  // templateUrl: './dark-mode-toggle.component.html',
  template: `<input
    type="checkbox"
    [checked]="darkMode$ | async"
    (change)="onToggle()"
  />`,

  styleUrls: ['./dark-mode-toggle.component.css'],
})
export class DarkModeToggleComponent implements OnInit {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  constructor(private darkModeService: DarkModeService) {}

  onToggle(): void {
    this.darkModeService.toggle();
  }

  ngOnInit(): void {
    this.onToggle();
  }
}
