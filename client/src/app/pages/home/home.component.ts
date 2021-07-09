import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ServersServiceService } from 'src/app/services/servers-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    public serversService: ServersServiceService,
    public apiService: ApiService
  ) {}

  ngOnInit(): void {}
}
