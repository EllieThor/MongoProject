import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  baseUrl: string = 'http://www.localhost:4000';

  constructor() {}
}
