import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  users: object;

  constructor(private data: DataService) { }

  ngOnInit() {
      this.data.getUsers().subscribe(data => {
        this.users = data;
      })
  }

}
