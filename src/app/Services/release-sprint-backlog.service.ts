import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReleaseSprintBAcklog } from '../classes/release-sprint-backlog';

@Injectable({
  providedIn: 'root'
})
export class ReleaseSprintBacklogService {

  private baserURL ="http://localhost:2001/api/v1/ReleaseSprintBacklog"
  constructor(private httpClient:HttpClient) { }

  getrelease_sprint_backlog():Observable<ReleaseSprintBAcklog[]>{
        return this.httpClient.get<ReleaseSprintBAcklog[]>(`${this.baserURL}`);
  }
}
