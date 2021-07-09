import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ServersServiceService } from 'src/app/services/servers-service.service';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.css'],
})
export class ServersListComponent implements OnInit {
  constructor(
    public serversService: ServersServiceService,
    public apiService: ApiService
  ) {
    this.serversService.getAllServers('/servers/getAllServers');
  }

  ngOnInit(): void {}
}
