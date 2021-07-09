import { Injectable } from '@angular/core';
import { Server } from '../models/models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ServersServiceService {
  _servers: Array<Server> = [];
  result: any = {};
  _searchInput: string = '';
  _onlyOnline: boolean = false;
  constructor(public apiService: ApiService) {}

  async getAllServers(url: string) {
    this._servers = (await this.apiService.createGetService(
      url
    )) as Array<Server>;
    console.log('Server: ', this._servers);
  }

  async updateStatus(url: string, ob: any) {
    this.result = (await this.apiService.createPostService(url, ob)) as any;
    console.log('result: ', this.result);
    console.log('url: ', url, '  ob: ', ob);
    if (this.result.affectedRows === 1)
      this.getAllServers('/servers/getAllServers');
  }

  async onlyOnline() {
    if (this._onlyOnline == true) this._onlyOnline = false;
    else this._onlyOnline = true;
    console.log('this._onlyOnline: ', this._onlyOnline);
  }
}
