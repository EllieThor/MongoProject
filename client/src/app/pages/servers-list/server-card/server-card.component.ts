import { Component, Input, OnInit } from '@angular/core';
import { Server } from 'src/app/models/models';
import { ServersServiceService } from 'src/app/services/servers-service.service';

@Component({
  selector: 'app-server-card',
  templateUrl: './server-card.component.html',
  styleUrls: ['./server-card.component.css'],
})
export class ServerCardComponent implements OnInit {
  @Input() server: Server = new Server();
  constructor(public serversService: ServersServiceService) {}

  ngOnInit(): void {}
}
