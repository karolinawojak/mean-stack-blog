import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry.model';
import { EntryService } from '../entry.service';

@Component ({
  selector: 'app-entries-list',
  templateUrl: './entries-list.component.html',
  styleUrls: ['./entries-list.component.scss']
})

export class EntriesListComponent implements OnInit {
  entriesList: Entry[] = [];

  // public instead of creating a property to store an incoming value in
  constructor(public entryService: EntryService) {}

  ngOnInit() {
    this.entriesList = this.entryService.getEntries();
  }
}
