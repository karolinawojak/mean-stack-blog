import { Component, Input } from '@angular/core';
import { Entry } from '../entry.model';

@Component ({
  selector: 'app-entries-list',
  templateUrl: './entries-list.component.html',
  styleUrls: ['./entries-list.component.scss']
})

export class EntriesListComponent {
  @Input()
  entriesList: Entry[] = [];
}
