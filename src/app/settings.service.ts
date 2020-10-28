import { Settings } from './settings.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  public settings: Settings;

  constructor(private http: HttpClient) {
    this.settings = new Settings();
  }


  init(): Promise<any> {

    return this.http.get<Settings>('assets/settings.json')
      .pipe(tap(data => this.settings = data))
      .toPromise();

  }
}
