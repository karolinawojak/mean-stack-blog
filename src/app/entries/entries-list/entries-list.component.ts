import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Entry } from '../entry.model';
import { EntryService } from '../entry.service';

@Component ({
  selector: 'app-entries-list',
  templateUrl: './entries-list.component.html',
  styleUrls: ['./entries-list.component.scss']
})

export class EntriesListComponent implements OnInit, OnDestroy {
  entriesList: Entry[] = [];
  private entriesSubscription: Subscription;

  // public instead of creating a property to store an incoming value in
  constructor(public entryService: EntryService) {}

  ngOnInit() {
    this.entriesList = this.entryService.getEntries();
    this.entriesSubscription = this.entryService.getEntriesListener()
      .subscribe((entriesListReceived: Entry[]) => {
        this.entriesList = entriesListReceived;
      });
  }

  ngOnDestroy() {
    this.entriesSubscription.unsubscribe();
  }
}
