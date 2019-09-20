import { Component, Input } from '@angular/core';

@Component ({
  selector: 'app-entries-list',
  templateUrl: './entries-list.component.html',
  styleUrls: ['./entries-list.component.scss']
})

export class EntriesListComponent {
  @Input()
  entriesList = [];
}
