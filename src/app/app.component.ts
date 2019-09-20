import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  entries = [];

  onEntryAdded(entryData) {
    this.entries.push(entryData);
  }
}
