import { Entry } from './entry.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EntryService {
  private entries: Entry[] = [];
  private entriesUpdate = new Subject<Entry[]>();

  getEntries() {
    // a copy of entries array
    return [...this.entries];
  }

  getEntriesListener() {
    return this.entriesUpdate.asObservable();
  }

  addEntry(title: string, content: string) {
    // property shorthand instead of {title: title, content: content} - ES6
    const entry: Entry = {title, content};
    this.entries.push(entry);
    this.entriesUpdate.next([...this.entries]);

  }
}
