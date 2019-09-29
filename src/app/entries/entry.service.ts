import { Entry } from './entry.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class EntryService {
  private entries: Entry[] = [];
  private entriesUpdate = new Subject<Entry[]>();

  constructor(private httpClient: HttpClient) {}

  getEntries() {
    this.httpClient.get<{message: string, entries: Entry[]}>('http://localhost:3000/api/posts')
      .subscribe(() => {

      });
  }

  getEntriesListener() {
    return this.entriesUpdate.asObservable();
  }

  addEntry(title: string, content: string) {
    // property shorthand instead of {title: title, content: content} - ES6
    const entry: Entry = {id: null, title, content};
    this.entries.push(entry);
    this.entriesUpdate.next([...this.entries]);

  }
}
