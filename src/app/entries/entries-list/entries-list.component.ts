import { Component, Input } from '@angular/core';

@Component ({
  selector: 'app-entries-list',
  templateUrl: './entries-list.component.html'
})

export class EntriesListComponent {
  @Input()
  entriesList = [];
}
