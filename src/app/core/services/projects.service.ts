import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, mergeAll, toArray } from 'rxjs/operators';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects(featured?: boolean): Observable<Project[]> {
    let projects$ = this.http.get<Project[]>('assets/json/projects.json');

    if (featured) {
      return projects$.pipe(
        mergeAll(),
        filter(project => project.featured || false),
        toArray()
      );
    }

    return projects$;
  }

}
