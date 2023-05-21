import { Component } from '@angular/core';
import { ReleaseSprintBAcklog } from '../classes/release-sprint-backlog';
import { ReleaseSprintBacklogSService } from '../Services/release-sprint-backlog-s.service';


@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css']
})
export class ReleaseComponent {
  isreleasesidenavbar=true;
  selectedDrawer=0;

  releaseSprintBacklog : ReleaseSprintBAcklog[] ;

  constructor(private  releaseSprintbacklogService : ReleaseSprintBacklogSService ){

  }

  ngOnInit(): void {
    this.getReleaseSprintBacklog(); 
  }

  private getReleaseSprintBacklog() {
    this.releaseSprintbacklogService.getrelease_sprint_backlog().subscribe(data => {
      this.releaseSprintBacklog = data;
      console.log(data)
    })
  }  
}
