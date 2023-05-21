import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReleaseSprintBAcklog } from '../classes/release-sprint-backlog';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReleaseSprintBacklogSService {

  private baserURL ="http://localhost:2001/api/v1/releaseSprintBacklog"
  constructor(private httpClient:HttpClient) { }

  getrelease_sprint_backlog():Observable<ReleaseSprintBAcklog[]>{
        return this.httpClient.get<ReleaseSprintBAcklog[]>(`${this.baserURL}`);
  }


}
