import { Entry } from './entry.model';

export class EntryService {
  private entries: Entry[] = [];

  getEntries() {
    // a copy of entries array
    return [...this.entries];
  }

  addEntry(title: string, content: string) {
    // property shorthand instead of {title: title, content: content} - ES6
    const entry: Entry = {title, content};
    this.entries.push(entry);

  }
}
