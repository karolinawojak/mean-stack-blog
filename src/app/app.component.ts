import { Component } from '@angular/core';
import { Entry } from './entries/entry.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  entries: Entry[] = [];

  onEntryAdded(entryData) {
    this.entries.push(entryData);
  }
}
