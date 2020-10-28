import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Settings } from './settings.model';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  data: Settings;

  constructor(svrSettings: SettingsService) {
    this.data = svrSettings.settings;
  }


}
